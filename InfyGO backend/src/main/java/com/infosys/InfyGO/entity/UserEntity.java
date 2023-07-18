
package com.infosys.InfyGO.entity;

import javax.persistence.*;

import lombok.Data;

import static javax.persistence.GenerationType.SEQUENCE;


@Entity
@Table(name = "USER_DETAILS")
@Data
public class UserEntity {

    @Id
    @GeneratedValue(strategy=SEQUENCE)
    private Long id;

    @Column(name = "user_id")
    private String userId;

    private String password;

    private String name;

    private String city;

    private String email;

    private String phone;

}
