CREATE DATABASE IF NOT EXISTS KYXNANGWSPKTLMS;

USE KYXNANGWSPKTLMS;

CREATE TABLE IF NOT EXISTS `user` (
	`id` INT AUTO_INCREMENT,
    `givenName` VARCHAR(100) NOT NULL,
    `familyName` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `facebook` VARCHAR(100),
    `phone` VARCHAR(20),
    `picture` VARCHAR(100) NOT NULL,
    `role` VARCHAR(100) NOT NULL DEFAULT "admin",
    `lastLoginTime` TIMESTAMP DEFAULT NOW(),
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_user` PRIMARY KEY (`id`),
    CONSTRAINT `unique_user` UNIQUE (`email`, `facebook`, `phone`)
);

CREATE TABLE IF NOT EXISTS `course` (
	`id` INT AUTO_INCREMENT,
    `ownerId` INT NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `desc` VARCHAR(100) NOT NULL,
    `picture` VARCHAR(100) NOT NULL,
    `isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
    `lastLoginTime` TIMESTAMP DEFAULT NULL,
    `startTime` TIMESTAMP DEFAULT NOW(),
    `endTime` TIMESTAMP,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_course` PRIMARY KEY (`id`),
    CONSTRAINT `fk_course_owner` FOREIGN KEY(`ownerId`) REFERENCES `user`(`id`)
);

CREATE TABLE IF NOT EXISTS `teacher` (
    `userId` INT NOT NULL,
    `courseId` INT NOT NULL,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_teacher` PRIMARY KEY (`userId`, `courseId`),
    CONSTRAINT `fk_teacher_user` FOREIGN KEY (`userId`) REFERENCES `user`(`id`),
	CONSTRAINT `fk_teacher_course` FOREIGN KEY(`courseId`) REFERENCES `course`(`id`)
);



CREATE TABLE IF NOT EXISTS `trainer` (
    `userId` INT NOT NULL,
    `courseId` INT NOT NULL,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_trainer` PRIMARY KEY (`userId`, `courseId`),
    CONSTRAINT `fk_trainer_user` FOREIGN KEY (`userId`) REFERENCES `user`(`id`),
    CONSTRAINT `fk_trainer_course` FOREIGN KEY(`courseId`) REFERENCES `course`(`id`)
);

CREATE TABLE IF NOT EXISTS `student` (
    `userId` INT NOT NULL,
    `courseId` INT NOT NULL,
    `score` DECIMAL NOT NULL DEFAULT -1,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_student` PRIMARY KEY (`userId`, `courseId`),
    CONSTRAINT `fk_student_user` FOREIGN KEY (`userId`) REFERENCES `user`(`id`),
    CONSTRAINT `fk_student_course` FOREIGN KEY(`courseId`) REFERENCES `course`(`id`)
);

CREATE TABLE IF NOT EXISTS `subject` (
	`id` INT AUTO_INCREMENT,
    `teacherId` INT NOT NULL,
    `courseId` INT NOT NULL,
	`name` VARCHAR(100) NOT NULL,
    `desc` VARCHAR(100) NOT NULL,
	`startTime` TIMESTAMP NOT NULL,
    `endTime` TIMESTAMP NOT NULL,
	`createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_subject` PRIMARY KEY (`id`),
    CONSTRAINT `fk_subject_teacher` FOREIGN KEY (`teacherId`, `courseId`) REFERENCES `teacher`(`userId`, `courseId`),
    CONSTRAINT `fk_subject_course` FOREIGN KEY(`courseId`) REFERENCES `course`(`id`)
);

CREATE TABLE IF NOT EXISTS `trainerInSubject` (
    `subjectId` INT NOT NULL,
    `courseId` INT NOT NULL,
    `trainerId` INT NOT NULL,
	CONSTRAINT `pk_subjecttrainer` PRIMARY KEY (`subjectId`, `trainerId`, `courseId`),
	CONSTRAINT `fk_subjecttrainer_subject` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`),
	CONSTRAINT `fk_subjecttrainer_trainer` FOREIGN KEY (`trainerId`, `courseId`) REFERENCES `trainer`(`userId`, `courseId`)
);

CREATE TABLE IF NOT EXISTS `studentInSubject` (
    `subjectId` INT NOT NULL,
    `courseId` INT NOT NULL,
    `studentId` INT NOT NULL,
    `score` DECIMAL NOT NULL DEFAULT -1,
    CONSTRAINT `pk_subjectstudent` PRIMARY KEY (`subjectId`, `studentId`, `courseId`),
	CONSTRAINT `fk_subjectstudent_subject` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`),
	CONSTRAINT `fk_subjectstudent_student` FOREIGN KEY (`studentId`, `courseId`) REFERENCES `student`(`userId`, `courseId`)
);

CREATE TABLE IF NOT EXISTS `section` (
	`id` INT AUTO_INCREMENT,
    `subjectId` INT,
	`name` VARCHAR(100) NOT NULL,
    `desc` VARCHAR(100) NOT NULL,
    `isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`isOpen` TINYINT(1) NOT NULL DEFAULT 0,
    `openTime` TIMESTAMP NOT NULL,
	`createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_section` PRIMARY KEY (`id`),
	CONSTRAINT `fk_section_subject` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`)
);

CREATE TABLE IF NOT EXISTS `sectionVideo` (
    `sectionId` INT,
    `video` VARCHAR(500) NOT NULL,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_sectionvideo` PRIMARY KEY (`sectionId`, `video`),
	CONSTRAINT `fk_sectionvideo_section` FOREIGN KEY (`sectionId`) REFERENCES `section`(`id`)
);

CREATE TABLE IF NOT EXISTS `sectionContent` (
    `sectionId` INT NOT NULL,
    `content` VARCHAR(500) NOT NULL,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_sectioncontent` PRIMARY KEY (`sectionId`, `content`),
	CONSTRAINT `fk_sectioncontent_lesson` FOREIGN KEY (`sectionId`) REFERENCES `section`(`id`)
);

CREATE TABLE IF NOT EXISTS `sectionFile` (
    `sectionId` INT NOT NULL,
    `file` VARCHAR(500) NOT NULL,
    `created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_sectionfile` PRIMARY KEY (`sectionId`, `file`),
	CONSTRAINT `fk_sectionfile_section` FOREIGN KEY (`sectionId`) REFERENCES `section`(`id`)
);


/*
CREATE TABLE `section_comment` (
	`id` INT AUTO_INCREMENT,
	`section_id` INT,
    `section_comment_id` INT,
    `user_id` INT,
	`content` VARCHAR(5000) NOT NULL,
    `created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_sectioncomment` PRIMARY KEY (`id`),
	CONSTRAINT `fk_sectioncomment_section` FOREIGN KEY (`section_id`) REFERENCES `section`(`id`),
    CONSTRAINT `fk_sectioncomment` FOREIGN KEY (`section_comment_id`) REFERENCES `section_comment`(`id`),
	CONSTRAINT `fk_sectioncomment_user` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
);

CREATE TABLE `lesson` (
	`id` INT AUTO_INCREMENT,
    `section_id` INT,
    `name` VARCHAR(100) NOT NULL,
    `desc` VARCHAR(100) NOT NULL,
	`is_open` TINYINT(1) NOT NULL DEFAULT 0,
    `open_time` TIMESTAMP NOT NULL,
	`created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_lesson` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lesson_section` FOREIGN KEY (`section_id`) REFERENCES `section`(`id`)
);

CREATE TABLE `lesson_video` (
	`id` INT AUTO_INCREMENT,
    `lesson_id` INT,
    `video_path` VARCHAR(500) NOT NULL,
    `created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_lessonvideo` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessonvideo_lesson` FOREIGN KEY (`lesson_id`) REFERENCES `lesson`(`id`)
);

CREATE TABLE `lesson_content` (
	`id` INT AUTO_INCREMENT,
    `lesson_id` INT,
    `content` VARCHAR(10000) NOT NULL,
    `created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_lessoncontent` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessoncontent_lesson` FOREIGN KEY (`lesson_id`) REFERENCES `lesson`(`id`)
);

CREATE TABLE `lesson_file` (
	`id` INT AUTO_INCREMENT,
    `lesson_id` INT,
    `file_path` VARCHAR(10000) NOT NULL,
    `created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_lessonfile` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessonfile_lesson` FOREIGN KEY (`lesson_id`) REFERENCES `lesson`(`id`)
);

CREATE TABLE `lesson_quiz` (
	`id` INT AUTO_INCREMENT,
    `lesson_id` INT,
    `name` VARCHAR(100) NOT NULL,
    `desc` VARCHAR(100) NOT NULL,
	`start_time` TIMESTAMP NOT NULL,
    `end_time` TIMESTAMP NOT NULL,
    `duration` INT NOT NULL,
    `allow_review` TINYINT(1) NOT NULL DEFAULT 0,
    `question_shuffle` TINYINT(1) NOT NULL DEFAULT 0,
    `answer_shuffle` TINYINT(1) NOT NULL DEFAULT 0,
	`created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_lessonquiz` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessonquiz_lesson` FOREIGN KEY (`lesson_id`) REFERENCES `lesson`(`id`)
);

CREATE TABLE `lesson_quiz_question` (
	`id` INT AUTO_INCREMENT,
    `lesson_quiz_id` INT,
    `no` INT NOT NULL,
    `text` VARCHAR(10000),
    `image` VARCHAR(500),
    `video` VARCHAR(500),
    `created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_lessonquizquestion` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessonquizquestion_lessonquiz` FOREIGN KEY (`lesson_quiz_id`) REFERENCES `lesson_quiz`(`id`)
);

CREATE TABLE `lesson_quiz_answer` (
	`id` INT AUTO_INCREMENT,
    `lesson_quiz_question_id` INT,
    `no` INT NOT NULL,
    `correct_answer` TINYINT(1) NOT NULL DEFAULT 0,
    `score` DECIMAL NOT NULL,
    `created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_lessonquizanswer` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessonquizanswer_lessonquizquestion` FOREIGN KEY (`lesson_quiz_question_id`) REFERENCES `lesson_quiz_question`(`id`)
);

CREATE TABLE `lesson_quiz_shortanswer` (
	`id` INT AUTO_INCREMENT,
    `lesson_quiz_answer_id` INT,
    `answer` VARCHAR(1000) NOT NULL,
	`created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_lessonquizshortanswer` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessonquizshortanswer_lessonquizanswer` FOREIGN KEY (`lesson_quiz_answer_id`) REFERENCES `lesson_quiz_answer`(`id`)
);

CREATE TABLE `lesson_quiz_multianswer` (
	`id` INT AUTO_INCREMENT,
    `lesson_quiz_answer_id` INT,
    `answer` VARCHAR(1000) NOT NULL,
    `score` DECIMAL NOT NULL,
	`created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_lessonquizmultianswer` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessonquizmultianswer_lessonquizanswer` FOREIGN KEY (`lesson_quiz_answer_id`) REFERENCES `lesson_quiz_answer`(`id`)
);

CREATE TABLE `lesson_quiz_textanswer` (
	`id` INT AUTO_INCREMENT,
    `lesson_quiz_answer_id` INT,
    `text` VARCHAR(1000) NOT NULL,
	`created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_lessonquiztextanswer` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessonquiztextanswer_lessonquizanswer` FOREIGN KEY (`lesson_quiz_answer_id`) REFERENCES `lesson_quiz_answer`(`id`)
);

CREATE TABLE `lesson_quiz_matchanswer` (
	`id` INT AUTO_INCREMENT,
    `lesson_quiz_answer_id` INT,
    `text` VARCHAR(1000) NOT NULL,
    `answer` VARCHAR(1000) NOT NULL,
    `score` DECIMAL NOT NULL,
	`created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_lessonquizmatchanswer` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessonquizmatchanswer_lessonquizanswer` FOREIGN KEY (`lesson_quiz_answer_id`) REFERENCES `lesson_quiz_answer`(`id`)
);
*/

CREATE TABLE IF NOT EXISTS `sectionAssignment` (
	`id` INT AUTO_INCREMENT,
    `sectionId` INT,
    `name` VARCHAR(100) NOT NULL,
    `desc` VARCHAR(100) NOT NULL,
	`startTime` TIMESTAMP NOT NULL,
    `endTime` TIMESTAMP NOT NULL,
    `allowResubmit` TINYINT(1) NOT NULL DEFAULT 1,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_lessonassignment` PRIMARY KEY (`id`),
	CONSTRAINT `fk_lessonassignment_lesson` FOREIGN KEY (`sectionId`) REFERENCES `section`(`id`)
);

CREATE TABLE IF NOT EXISTS `sectionAssignmentFile` (
	`id` INT AUTO_INCREMENT,
    `sectionAssignmentId` INT NOT NULL,
    `file` VARCHAR(500) NOT NULL,
	`createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_sectionassignmentfile` PRIMARY KEY (`id`),
	CONSTRAINT `fk_sectionassignmentfile_sectionassignment` FOREIGN KEY (`sectionAssignmentId`) REFERENCES `sectionAssignment`(`id`)
);

CREATE TABLE IF NOT EXISTS `sectionAssignmentText` (
	`id` INT AUTO_INCREMENT,
    `sectionAssignmentId` INT,
    `text` VARCHAR(10000) NOT NULL,
	`createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_sectionassignmenttext` PRIMARY KEY (`id`),
	CONSTRAINT `fk_sectionassignmenttext_sectionassignment` FOREIGN KEY (`sectionAssignmentId`) REFERENCES `sectionAssignment`(`id`)
);

CREATE TABLE IF NOT EXISTS `studentAssignment` (
	`id` INT AUTO_INCREMENT,
    `studentId` INT NOT NULL,
    `courseId` INT NOT NULL,
    `assignmentId` INT NOT NULL,
    `score` DECIMAL NOT NULL DEFAULT -1,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_studentassignment` PRIMARY KEY (`id`),
	CONSTRAINT `fk_studentassignment_student` FOREIGN KEY (`studentId`, `courseId`) REFERENCES `student`(`userId`, `courseId`),
    CONSTRAINT `fk_studentassignment_assignment` FOREIGN KEY (`assignmentId`) REFERENCES `sectionAssignment`(`id`)
);

CREATE TABLE IF NOT EXISTS `privateCommentAssignment` (
	`id` INT AUTO_INCREMENT,
    `studentId` INT NOT NULL,
    `courseId` INT NOT NULL,
	`assignmentId` INT NOT NULL,
    `content` VARCHAR(1000) NOT NULL,
	`createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_privatecommentassignment` PRIMARY KEY (`id`),
	CONSTRAINT `fk_privatecommentassignment_student` FOREIGN KEY (`studentId`, `courseID`) REFERENCES `student`(`userId`, `courseId`),
    CONSTRAINT `fk_privatecommentassignment_assignment` FOREIGN KEY (`assignmentId`) REFERENCES `sectionAssignment`(`id`)
);

CREATE TABLE IF NOT EXISTS `fileAssignment` (
	`id` INT AUTO_INCREMENT,
    `studentId` INT NOT NULL,
    `courseId` INT NOT NULL,
	`assignmentId` INT NOT NULL,
    `file` VARCHAR(1000) NOT NULL,
	`createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_fileassignment` PRIMARY KEY (`id`),
	CONSTRAINT `fk_fileassignment_student` FOREIGN KEY (`studentId`, `courseId`) REFERENCES `student`(`userId`, `courseId`),
    CONSTRAINT `fk_fileassignment_assignment` FOREIGN KEY (`assignmentId`) REFERENCES `sectionAssignment`(`id`)
);

/*
CREATE TABLE `student_quiz` (
	`id` INT AUTO_INCREMENT,
    `student_id` INT,
    `quiz_id` INT,
    `score`	DECIMAL NOT NULL DEFAULT -1,
	`created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    CONSTRAINT `pk_studentquiz` PRIMARY KEY (`id`),
	CONSTRAINT `fk_studentquiz_student` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`),
    CONSTRAINT `fk_studentquiz_quiz` FOREIGN KEY (`quiz_id`) REFERENCES `lesson_quiz`(`id`)
);

CREATE TABLE `student_answer` (
	`id` INT AUTO_INCREMENT,
    `student_quiz_id` INT,
    `lesson_quiz_question_id` INT,
    `score` DECIMAL NOT NULL DEFAULT -1,
    `created_time` TIMESTAMP DEFAULT NOW(),
    `modified_time` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_studentanswer` PRIMARY KEY (`id`),
	CONSTRAINT `fk_studentanswer_studentquiz` FOREIGN KEY (`student_quiz_id`) REFERENCES `student_quiz`(`id`),
    CONSTRAINT `fk_studentanswer_lessonquizquestion` FOREIGN KEY (`lesson_quiz_question_id`) REFERENCES `lesson_quiz_question`(`id`)
);
*/
CREATE TABLE IF NOT EXISTS `post` (
	`id` INT AUTO_INCREMENT,
    `ownerId` INT NOT NULL,
	`courseId` INT NOT NULL,
    `content` VARCHAR(1000) NOT NULL,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_post` PRIMARY KEY (`id`),
    CONSTRAINT `fk_post_user` FOREIGN KEY (`ownerId`) REFERENCES `user`(`id`),
    CONSTRAINT `fk_post_course` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`)
);

CREATE TABLE IF NOT EXISTS `postFile` (
	`id` INT AUTO_INCREMENT,
    `postId` INT NOT NULL,
    `link` VARCHAR(1000) NOT NULL,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_postfile` PRIMARY KEY (`id`),
    CONSTRAINT `fk_postfile_post` FOREIGN KEY (`postId`) REFERENCES `post`(`id`)
);

CREATE TABLE IF NOT EXISTS `postSection` (
	`id` INT AUTO_INCREMENT,
    `postId` INT NOT NULL,
    `sectionId` INT NOT NULL,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_postsection` PRIMARY KEY (`id`),
    CONSTRAINT `fk_postsection_post` FOREIGN KEY (`postId`) REFERENCES `post`(`id`),
    CONSTRAINT `fk_postsection_section` FOREIGN KEY (`sectionId`) REFERENCES `section`(`id`)
);

CREATE TABLE IF NOT EXISTS `postComment` (
	`id` INT AUTO_INCREMENT,
    `postId` INT NOT NULL,
    `replyId` INT NOT NULL,
    `ownerId` INT NOT NULL,
    `content` VARCHAR(1000) NOT NULL,
    `createdTime` TIMESTAMP DEFAULT NOW(),
    `modifiedTime` TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
	CONSTRAINT `pk_postcomment` PRIMARY KEY (`id`),
    CONSTRAINT `fk_postcomment_reply` FOREIGN KEY (`replyId`) REFERENCES `postComment`(`id`),
    CONSTRAINT `fk_postcomment_post` FOREIGN KEY (`postId`) REFERENCES `post`(`id`),
    CONSTRAINT `fk_postcomment_user` FOREIGN KEY (`ownerId`) REFERENCES `user`(`id`)
);