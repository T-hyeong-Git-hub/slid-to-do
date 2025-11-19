package com.slidtodo.backend.controller.api;

import com.slidtodo.backend.entity.Account;
import com.slidtodo.backend.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    public Account create(@RequestBody Account account) {
        return accountService.create(account);
    }

    @GetMapping
    public List<Account> findAll() {
        return accountService.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        accountService.delete(id);
    }
}
