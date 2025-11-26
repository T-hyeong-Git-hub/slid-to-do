package com.slidtodo.backend.service;

import com.slidtodo.backend.dto.UserDto;
import com.slidtodo.backend.entity.User;
import com.slidtodo.backend.repository.UserRepository;
import com.slidtodo.backend.requestDto.LoginRequest;
import com.slidtodo.backend.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service  // Spring이 관리하는 서비스 빈
@RequiredArgsConstructor  // Lombok이 생성자 자동 생성 (@Autowired 같은 효과)
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public Map<String, Object> login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("비밀번호가 일치하지 않습니다");
        }

        String accessToken = jwtUtil.generateAccessToken(user.getEmail());
        String refreshToken = jwtUtil.generateRefreshToken(user.getEmail());

        Map<String, Object> response = new HashMap<>();
        response.put("user", UserDto.fromEntity(user));
        response.put("accessToken", accessToken);
        response.put("refreshToken", refreshToken);

        return response;
    }
}
