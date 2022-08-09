package com.greatlearning.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.greatlearning.entity.Question;
import com.greatlearning.repository.QuestionRepository;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;
    
    @Autowired
	private EmailService emailSenderService;

    public Question getById(int Id) {
        return questionRepository.findById(Id).isPresent() ? questionRepository.findById(Id).get() : new Question();
    }

    public List<Question> getAll() {
        return questionRepository.findAll();
    }

    public List<Question> getByUserEmail(String email) {
        return questionRepository.getByuserEmail(email);
    }

    public void update(Question q) {
        questionRepository.save(q);
    }

    public void delete(int id) {
        Question q = questionRepository.getById(id);
        questionRepository.delete(q);
    }

    public void postQuestion(Question q) {
        questionRepository.save(q);
        emailSenderService.sendEmailForNewQuestion(q);
    }

    public List<Question> getQuestionsByAnswered(boolean isAnswered) {
        return questionRepository.getByIsAnswered(isAnswered);
    }

    public List<Question> getQuestionByApproved(boolean isApproved) {
        return questionRepository.getByIsApproved(isApproved);
    }

    public Integer getQuestionCount() {
        return questionRepository.getCountByIsApproved(false);
    }

    public List<Question> getByTopic(String topic) {
        return questionRepository.getQuestionsByTopic(topic);
    }

    public List<String> getDistinctByTopic() {
        return questionRepository.getDistinctTopic();
    }

}
