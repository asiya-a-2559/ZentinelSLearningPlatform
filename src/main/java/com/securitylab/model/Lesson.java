package com.securitylab.model;

import java.sql.Timestamp;

public class Lesson {
    private int id;
    private int categoryId;
    private String categoryName;
    private int levelId;
    private int courseId;
    private String title;
    private String slug;
    private String difficulty;
    private String summary;
    private String description;
    private String demoHtml;
    private String labHtml;
    private String labSolution;
    private int sortOrder;
    private Timestamp createdAt;

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getCategoryId() { return categoryId; }
    public void setCategoryId(int categoryId) { this.categoryId = categoryId; }

    public String getCategoryName() { return categoryName; }
    public void setCategoryName(String categoryName) { this.categoryName = categoryName; }

    public int getLevelId() { return levelId; }
    public void setLevelId(int levelId) { this.levelId = levelId; }

    public int getCourseId() { return courseId; }
    public void setCourseId(int courseId) { this.courseId = courseId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getDemoHtml() { return demoHtml; }
    public void setDemoHtml(String demoHtml) { this.demoHtml = demoHtml; }

    public String getLabHtml() { return labHtml; }
    public void setLabHtml(String labHtml) { this.labHtml = labHtml; }

    public String getLabSolution() { return labSolution; }
    public void setLabSolution(String labSolution) { this.labSolution = labSolution; }

    public int getSortOrder() { return sortOrder; }
    public void setSortOrder(int sortOrder) { this.sortOrder = sortOrder; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }
}
