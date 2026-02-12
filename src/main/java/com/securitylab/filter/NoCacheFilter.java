package com.securitylab.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Filter to prevent browser caching of static assets during development.
 * This ensures users always get the latest JS/CSS without needing incognito mode.
 */
@WebFilter(urlPatterns = {"/js/*", "/css/*", "/index.html"})
public class NoCacheFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        
        // Prevent caching
        httpResponse.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        httpResponse.setHeader("Pragma", "no-cache");
        httpResponse.setDateHeader("Expires", 0);
        
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
    }
}
