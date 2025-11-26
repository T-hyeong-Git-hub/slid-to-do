package com.slidtodo.backend.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component  // Spring이 관리하는 빈으로 등록
public class JwtUtil {
    // application.yml에서 설정값을 가져옵니다
    // 없으면 기본값(default) 사용
    @Value("${jwt.secret}")
    private String secretKey;

    // accessToken 유효기간: 1시간 (3600000 밀리초)
    @Value("${jwt.access-token-expiration}")
    private long accessTokenExpiration;

    // refreshToken 유효기간: 7일 (604800000 밀리초)
    @Value("${jwt.refresh-token-expiration}")
    private long refreshTokenExpiration;

    // AccessToken 생성 메서드
    // 1시간 유효한 토큰을 만듭니다
    public String generateAccessToken(String email) {
        return generateToken(email, accessTokenExpiration);
    }

    // RefreshToken 생성 메서드
    // 7일 유효한 토큰을 만듭니다
    public String generateRefreshToken(String email) {
        return generateToken(email, refreshTokenExpiration);
    }

    // JWT 토큰 생성 메서드
    private String generateToken(String email, long expiration) {
        return Jwts.builder()
                // 토큰의 주체(subject): 이메일을 저장
                .setSubject(email)
                // 토큰 발급 시간
                .setIssuedAt(new Date())
                // 토큰 만료 시간 = 현재 시간 + expiration
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                // 토큰에 서명: 비밀키로 암호화
                // HS256: HMAC SHA-256 알고리즘 사용
                .signWith(Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8)),
                        SignatureAlgorithm.HS256)
                // 최종 JWT 토큰 문자열 반환
                .compact();
    }
}
