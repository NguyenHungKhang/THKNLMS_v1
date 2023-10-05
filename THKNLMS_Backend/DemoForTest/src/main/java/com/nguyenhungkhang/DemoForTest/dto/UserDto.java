package com.nguyenhungkhang.DemoForTest.dto;

import com.nguyenhungkhang.DemoForTest.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private String familyName;

    private String givenName;

    private String email;

    public static final UserDto convertToDto(User account) {
        return UserDto.builder()
                .familyName(account.getFamilyName())
                .givenName(account.getGivenName())
                .email(account.getEmail())
                .build();
    }
}
