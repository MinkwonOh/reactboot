package com.example.demo.dao;

import java.util.List;

import com.example.demo.vo.NotiVO;

public interface NotiDAO {
	public List<NotiVO> selectNoti() throws Exception;
}
