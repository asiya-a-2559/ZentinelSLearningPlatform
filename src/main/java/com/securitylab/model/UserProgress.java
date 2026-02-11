package com.securitylab.model;

import java.sql.Timestamp;

public class UserProgress {
    private int id;
    private int userId;
    private int lessonId;
    private String lessonTitle;
    private String lessonStatus; // not_started, in_progress, completed
    private boolean demoCompleted;
    private boolean labCompleted;
    private boolean quizCompleted;
    private int quizScore;
    private Timestamp startedAt;
    private Timestamp completedAt;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public int getLessonId() { return lessonId; }
    public void setLessonId(int lessonId) { this.lessonId = lessonId; }

    public String getLessonTitle() { return lessonTitle; }
    public void setLessonTitle(String lessonTitle) { this.lessonTitle = lessonTitle; }

    public String getLessonStatus() { return lessonStatus; }
    public void setLessonStatus(String lessonStatus) { this.lessonStatus = lessonStatus; }

    public boolean isDemoCompleted() { return demoCompleted; }
    public void setDemoCompleted(boolean demoCompleted) { this.demoCompleted = demoCompleted; }

    public boolean isLabCompleted() { return labCompleted; }
    public void setLabCompleted(boolean labCompleted) { this.labCompleted = labCompleted; }

    public boolean isQuizCompleted() { return quizCompleted; }
    public void setQuizCompleted(boolean quizCompleted) { this.quizCompleted = quizCompleted; }

    public int getQuizScore() { return quizScore; }
    public void setQuizScore(int quizScore) { this.quizScore = quizScore; }

    public Timestamp getStartedAt() { return startedAt; }
    public void setStartedAt(Timestamp startedAt) { this.startedAt = startedAt; }

    public Timestamp getCompletedAt() { return completedAt; }
    public void setCompletedAt(Timestamp completedAt) { this.completedAt = completedAt; }

    /** Computed: lesson is completed when status is 'completed' */
    public boolean isCompleted() {
        return "completed".equals(lessonStatus);
    }
}
