package com.slidtodo.backend.repository;

import com.slidtodo.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // JpaRepository<User, Long>:
    // - User: 관리할 엔티티 타입
    // - Long: 기본키(id)의 타입

    // 기본 제공 메서드:
    // save(), findById(), findAll(), delete(), deleteById() 등

    // 커스텀 메서드: 이메일로 사용자 찾기
    // Spring Data JPA가 자동으로 SQL 쿼리를 생성합니다
    // SELECT * FROM users WHERE email = ?
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email); //회원 가입 이메일 중복체크



}
