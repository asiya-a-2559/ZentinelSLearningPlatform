package com.securitylab.model;

import java.sql.Timestamp;

public class Course {
    private int id;
    private String title;
    private String slug;
    private String description;
    private String icon;
    private String color;
    private String difficulty;
    private int sortOrder;
    private Timestamp createdAt;
    private int levelCount;
    private int lessonCount;
    private int completedLessons;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public int getSortOrder() { return sortOrder; }
    public void setSortOrder(int sortOrder) { this.sortOrder = sortOrder; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public int getLevelCount() { return levelCount; }
    public void setLevelCount(int levelCount) { this.levelCount = levelCount; }

    public int getLessonCount() { return lessonCount; }
    public void setLessonCount(int lessonCount) { this.lessonCount = lessonCount; }

    public int getCompletedLessons() { return completedLessons; }
    public void setCompletedLessons(int completedLessons) { this.completedLessons = completedLessons; }
}
