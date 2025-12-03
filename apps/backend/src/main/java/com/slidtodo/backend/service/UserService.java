package com.slidtodo.backend.service;

import com.slidtodo.backend.entity.User;
import com.slidtodo.backend.repository.UserRepository;
import com.slidtodo.backend.requestDto.SignUpRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public String signUp(SignUpRequest request) { //회원 가입
        // 이메일 중복 체크
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }

        // 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(request.getPassword());

        // 저장
        User user = userRepository.save(
                User.builder()
                        .email(request.getEmail())
                        .password(encodedPassword)
                        .name(request.getName())
                        .build()
        );
        return "회원가입이 완료 되었습니다";
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    public Map<String, Object> getUserInfo(String email) { //회원 정보 조회
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("회원을 찾을 수 없습니다."));

        Map<String, Object> result = new HashMap<>();
        result.put("id", user.getId());
        result.put("email", user.getEmail());
        result.put("name", user.getName());

        return result;
    }
}
