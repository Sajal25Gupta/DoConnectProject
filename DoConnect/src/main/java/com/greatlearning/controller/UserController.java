package com.greatlearning.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.greatlearning.entity.User;
import com.greatlearning.service.UserService;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userservice;

    @PostMapping("/login")
    private String login(@RequestBody HashMap<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");
        String role = body.get("role");
        System.out.println(userservice.isExists(email,password));
        User user = userservice.findByPassword(password);
        if (role.equals("admin") && user != null) {
            return "admin";
        } else if (userservice.isExists(email,password)) {
            return "user";
        } else {
            return "no";
        }
    }


    @GetMapping("/useremail/{email}")
    private User getUserByEmail(@PathVariable String email) {
        return userservice.findByEmail(email);
    }

    @PostMapping("/register")
    private String Register(@RequestBody User u) {
        if (userservice.isExists(u.getEmail(), u.getPassword())) {
            return "exist";
        } else {
            userservice.save(u);
            return "inserted";
        }
    }

    @GetMapping("/user/{id}")
    private User user(@PathVariable int id) {
        try {
            return userservice.getById(id);
        } catch (Exception e) {
            return new User();
        }
    }

    @GetMapping("/users/unique/{name}")
    private List<String> getUniqueUsers(@PathVariable String name) {
        return userservice.getByDistinct(name);
    }

    @DeleteMapping("/deleteuser/{email}")
    private String deleteUser(@PathVariable String email) {
        if (userservice.findByEmail(email) != null) {
            userservice.delete(email);
            return "ok";
        }
        return "no";
    }
    
    @PostMapping("/updateuser")
    private String updateUser(@RequestBody HashMap<String, String> body) {
    	 String id = body.get("id");
    	 String name = body.get("name");
    	 String email = body.get("email");
         String password = body.get("password");
         String role = body.get("role");
         int userId = Integer.parseInt(id);
         User user = new User();
         user.setId(userId);
         user.setName(name);
         user.setEmail(email);
         user.setPassword(password);
         user.setRole(role);
         
         if(user.getRole().equals("user")) {
        	 userservice.update(user);
        	 return "updated";
         }
         else  if(user.getRole().equals("admin")) {
        	 userservice.update(user);
        	 return "admin updated";
         }
         
         else {
        	 return "no";
         }
    }
    
   @GetMapping("getallusers")
   private List<User> getAllUsers(){
	   return userservice.getAllUsers();   
   }
   
   @DeleteMapping("/deleteuser")
   private String deleteUserById(@RequestBody HashMap<String, String> body) {
	   
	   String userId = body.get("id");
	   
	   int id = Integer.parseInt(userId);
	   
	   if (userservice.findUserById(id) != null) {
		   userservice.deleteUserById(id);           
		   return "ok";
	   }
	   
	   else {
		   return "no";
	   }
	   
	   
	   
   }
}
