package com.slidtodo.backend.controller.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.slidtodo.backend.requestDto.LoginRequest;
import com.slidtodo.backend.requestDto.SignUpRequest;
import com.slidtodo.backend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/{teamId}/user")
@RequiredArgsConstructor
@Tag(name = "User", description = "유저 API")
public class UserController {

    private final UserService userService;
    private Logger log = LoggerFactory.getLogger(getClass());


    @PostMapping
    @Operation(summary = "회원가입")
    public ResponseEntity<Map<String, String>> signup(@RequestBody SignUpRequest request) {
        String message = userService.signUp(request);

        Map<String, String> result = new HashMap<>();
        result.put("message", message);

        return ResponseEntity.ok(result);
    }

    @GetMapping
    @Operation(summary = "회원 정보 조회")
    public ResponseEntity<Map<String, Object>> getMyInfo(@RequestBody String body) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(body);

        String email = jsonNode.get("email").asText();
        log.info("email: " + email);

        return ResponseEntity.ok(userService.getUserInfo(email));
    }
}
