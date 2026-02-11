package com.securitylab.model;

import java.util.List;

public class Level {
    private int id;
    private int courseId;
    private String title;
    private String description;
    private int levelNumber;
    private int sortOrder;
    private List<Lesson> lessons;
    private int lessonCount;
    private int completedLessons;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getCourseId() { return courseId; }
    public void setCourseId(int courseId) { this.courseId = courseId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getLevelNumber() { return levelNumber; }
    public void setLevelNumber(int levelNumber) { this.levelNumber = levelNumber; }

    public int getSortOrder() { return sortOrder; }
    public void setSortOrder(int sortOrder) { this.sortOrder = sortOrder; }

    public List<Lesson> getLessons() { return lessons; }
    public void setLessons(List<Lesson> lessons) { this.lessons = lessons; }

    public int getLessonCount() { return lessonCount; }
    public void setLessonCount(int lessonCount) { this.lessonCount = lessonCount; }

    public int getCompletedLessons() { return completedLessons; }
    public void setCompletedLessons(int completedLessons) { this.completedLessons = completedLessons; }
}
