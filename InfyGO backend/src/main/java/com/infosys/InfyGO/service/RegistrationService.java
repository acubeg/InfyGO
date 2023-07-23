package  com.infosys.InfyGO.service;

import java.util.Optional;



import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.infosys.InfyGO.dto.User;
import com.infosys.InfyGO.entity.UserEntity;
import com.infosys.InfyGO.exception.UserIdAlreadyPresentException;
import com.infosys.InfyGO.repository.UserRepository;

import ch.qos.logback.classic.Logger;

@Service
public class RegistrationService {

	final Logger logger = (Logger) LoggerFactory.getLogger(this.getClass());

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public String registerUser(User user) throws UserIdAlreadyPresentException {
		Long time1 = System.currentTimeMillis();
		Optional<UserEntity> ue = userRepository.findByUserId(user.getUserId());
		Long time2 = System.currentTimeMillis();

		String data = Long.toString(time2 - time1);
		logger.info("Amount of time taken:");
		logger.info(data);
		logger.info("milliseconds.");

		if (ue.isPresent()) {
			throw new UserIdAlreadyPresentException("RegistrationService.USERID_PRESENT");
		} else {
			UserEntity userEntity = new UserEntity();
			userEntity.setCity(user.getCity());
			userEntity.setEmail(user.getEmail());
			userEntity.setName(user.getName());
			userEntity.setPassword(passwordEncoder.encode(user.getPassword()));
			userEntity.setPhone(user.getPhone());
			userEntity.setUserId(user.getUserId());
			userRepository.saveAndFlush(userEntity);
			return "Successfully Account Created";
		}
	}
}
