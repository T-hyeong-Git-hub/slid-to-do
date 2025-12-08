package com.slidtodo.backend.repository;

import com.slidtodo.backend.entity.Goal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Long> {
    // JpaRepository<User, Long>:
    // - User: 관리할 엔티티 타입
    // - Long: 기본키(id)의 타입

    // 기본 제공 메서드:
    // save(), findById(), findAll(), delete(), deleteById() 등

    // 커스텀 메서드: 이메일로 사용자 찾기
    // Spring Data JPA가 자동으로 SQL 쿼리를 생성합니다
    // SELECT * FROM users WHERE email = ?

}
