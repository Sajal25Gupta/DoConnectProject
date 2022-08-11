package com.greatlearning.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.greatlearning.entity.User;
import com.greatlearning.repository.UserRepository;

import javax.persistence.Id;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public boolean isExists(String email, String password) {
    	System.out.println(userRepository.findByPassword(password));
    	System.out.println(userRepository.findByEmail(email) != null);
        return userRepository.findByPassword(password) != null && userRepository.findByEmail(email) != null;
    }

    public void save(User u) {
        userRepository.save(u);
    }

    public void delete(String email) {
        User u = userRepository.findByEmail(email);
        userRepository.delete(u);
    }

    public void update(User u) {
    	
        userRepository.save(u);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User findByPassword(String password) {
        return userRepository.findByPassword(password);
    }

    public User getById(int id) {
        return userRepository.findById(id);
    }

    public List<String> getByDistinct(String name) {
        return userRepository.getByUniqueUser(name);
    }

    public User findByRole(String role) {
    	return userRepository.findByRole(role);
    }
    
   public List<User> getAllUsers(){
	   List<User> allUserList  = userRepository.findAll();
	   List<User> userList = new ArrayList<User>();
	   
	   for(User user: allUserList) {
		   if(user.getRole().equals("user")) {
			   userList.add(user);
		   }
	   }
	   
	   return userList;
   }
   
   public void deleteUserById(int id) {
	   userRepository.deleteById(id);;
   }
   
   public User findUserById(int id) {
	   User user = userRepository.findById(id);
	   return user;
	   
   }
}
