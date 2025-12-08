package com.slidtodo.backend.service;

import com.slidtodo.backend.entity.Goal;
import com.slidtodo.backend.entity.User;
import com.slidtodo.backend.repository.GoalRepository;
import com.slidtodo.backend.requestDto.SignUpRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GoalService {
    private final GoalRepository goalRepository;

    public String createGoal(String title) { //목표 생성

        // 저장
        Goal goal = goalRepository.save(
                Goal.builder()
                        .title(title)
//                        .password(encodedPassword)
//                        .name(request.getName())
                        .build()
        );
        return "회원가입이 완료 되었습니다";
    }
}
