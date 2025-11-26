package com.slidtodo.backend.service;

import com.slidtodo.backend.dto.UserDto;
import com.slidtodo.backend.entity.User;
import com.slidtodo.backend.repository.UserRepository;
import com.slidtodo.backend.requestDto.LoginRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AuthServiceTest {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;

    @BeforeEach
    void setup() {
        userRepository.deleteAll();
        userRepository.save(User.builder()
                .email("test@test.com")
                .password(encoder.encode("1234"))
                .name("테스터")
                .build());
    }

    @Test
    void 로그인_성공한다() {
        LoginRequest request = new LoginRequest("test@test.com", "1234");

        Map<String, Object> response = authService.login(request);

        assertNotNull(response.get("accessToken"));
        assertNotNull(response.get("refreshToken"));
        UserDto userDto = (UserDto) response.get("user");
        assertEquals("test@test.com", userDto.getEmail());
    }
}