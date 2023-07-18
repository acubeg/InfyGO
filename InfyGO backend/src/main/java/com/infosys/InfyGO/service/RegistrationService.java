package com.infosys.InfyGO.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;

import com.infosys.InfyGO.dto.User;
import com.infosys.InfyGO.entity.UserEntity;
import com.infosys.InfyGO.exception.UserIdAlreadyPresentException;
import com.infosys.InfyGO.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserRepository userRepository;

    public String registerUser(User user) throws UserIdAlreadyPresentException {

       // try{
            Long time1;
            Long time2;
            time1 = System.currentTimeMillis();
            UserEntity ue = userRepository.findByUserId(user.getUserId());
            time2 = System.currentTimeMillis();

            String data = Long.toString(time2 - time1);
            logger.info("Amount of time taken:");
            logger.info(data);
            logger.info("miliseconds.");
            if (ue != null)
                throw new UserIdAlreadyPresentException("RegistrationService.USERID_PRESENT");
            UserEntity userEntity = new UserEntity();
            userEntity.setCity(user.getCity());
            userEntity.setEmail(user.getEmail());
            userEntity.setName(user.getName());
            userEntity.setPassword(user.getPassword());
            userEntity.setPhone(user.getPhone());
            userEntity.setUserId(user.getUserId());
            userRepository.saveAndFlush(userEntity);
            return "Successfully Account Created";
//        } catch (Exception e){
//            return "Failed to create Account";
//        }
    }

}
