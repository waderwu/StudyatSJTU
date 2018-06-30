from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    ta = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.user.username


class Course(models.Model):
    term = models.CharField(max_length=30)
    name = models.CharField(max_length=30)
    short = models.CharField(max_length=30)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class StudentCourse(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    isScored = models.BooleanField(default=False)
    isComment = models.BooleanField(default=False)

    def __str__(self):
        return self.student.user.username + " : " + self.course.name


class Homework(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    release = models.DateField()
    due = models.DateField()
    title = models.CharField(max_length=200)
    description = models.TextField()


class StudentHomework(models.Model):
    homework = models.ForeignKey(Homework, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    isfinish = models.BooleanField(default=False)


class HomeworkComment(models.Model):
    homework = models.ForeignKey(Homework, on_delete=models.CASCADE)
    comment = models.TextField()
    answerto = models.ForeignKey("HomeworkComment", on_delete=models.CASCADE, blank=True)
    date = models.DateTimeField(auto_created=True)


class CourseComment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    comment = models.TextField()
    star = models.IntegerField(default=0)
    date = models.DateTimeField(auto_created=True)
    answerto = models.ForeignKey("HomeworkComment", on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.comment


class Score(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    score = models.IntegerField(default=60)

    def __str__(self):
        return self.course.name + ":" + str(self.score)


class Teacher(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    ftppass = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Material(models.Model):
    uploader = models.ForeignKey(Student, on_delete=models.CASCADE, blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    link = models.CharField(max_length=200)
    description = models.TextField()
    title = models.CharField(max_length=200)
    download = models.IntegerField(default=0)
    approval = models.IntegerField(default=0)
    disapproval = models.IntegerField(default=0)
    date = models.DateTimeField(auto_created=True)
