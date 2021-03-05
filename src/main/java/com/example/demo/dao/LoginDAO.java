package com.example.demo.dao;

import java.util.List;

import com.example.demo.vo.LoginVO;

public interface LoginDAO {
	public LoginVO selectLogin(LoginVO param) throws Exception;
}
