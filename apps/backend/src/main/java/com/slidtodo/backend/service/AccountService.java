package com.slidtodo.backend.service;

import com.slidtodo.backend.entity.Account;
import com.slidtodo.backend.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;

    public Account create(Account account) {
        return accountRepository.save(account);
    }

    public List<Account> getAll() {
        return accountRepository.findAll();
    }

    public void delete(Long id) {
        accountRepository.deleteById(id);
    }
}
