package com.securitylab.servlet;

import com.securitylab.dao.CourseDAO;
import com.securitylab.model.Course;
import com.securitylab.model.Level;
import com.securitylab.model.Lesson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet(urlPatterns = "/api/courses/*")
public class CourseServlet extends BaseServlet {

    private final CourseDAO courseDAO = new CourseDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String seg1 = getPathSegment(req, 0);
        String seg2 = getPathSegment(req, 1);

        try {
            if (seg1 == null) {
                // GET /api/courses — list all courses
                List<Course> courses = courseDAO.getAllCourses();
                sendJson(resp, courses);

            } else if ("levels".equals(seg2)) {
                // GET /api/courses/{slug}/levels — levels for a course
                Course course = courseDAO.getCourseBySlug(seg1);
                if (course == null) {
                    sendError(resp, 404, "Course not found: " + seg1);
                    return;
                }
                List<Level> levels = courseDAO.getLevelsByCourse(course.getId());
                // Attach lessons to each level
                for (Level level : levels) {
                    List<Lesson> lessons = courseDAO.getLessonsByLevel(level.getId());
                    level.setLessons(lessons);
                }
                Map<String, Object> data = new HashMap<>();
                data.put("course", course);
                data.put("levels", levels);
                sendJson(resp, data);

            } else {
                // GET /api/courses/{slug} — single course detail
                Course course = courseDAO.getCourseBySlug(seg1);
                if (course != null) {
                    List<Level> levels = courseDAO.getLevelsByCourse(course.getId());
                    for (Level level : levels) {
                        List<Lesson> lessons = courseDAO.getLessonsByLevel(level.getId());
                        level.setLessons(lessons);
                    }
                    Map<String, Object> data = new HashMap<>();
                    data.put("course", course);
                    data.put("levels", levels);
                    sendJson(resp, data);
                } else {
                    sendError(resp, 404, "Course not found: " + seg1);
                }
            }
        } catch (Exception e) {
            sendError(resp, 500, "Server error: " + e.getMessage());
        }
    }
}
