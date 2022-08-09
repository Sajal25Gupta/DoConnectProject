package com.greatlearning.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.greatlearning.entity.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);

    User findByPassword(String password);
    
    User findByRole(String role);

    User findFirstByEmail(String email);
    
    @Query("SELECT u.name FROM User u WHERE u.name!=:name AND u.role!='admin' ")
    List<String> getByUniqueUser(@Param("name") String name);
}
