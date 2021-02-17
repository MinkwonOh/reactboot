package com.example.demo.dao;

import java.util.List;

import com.example.demo.vo.ToDoVO;

public interface ToDoDAO {
	public List<ToDoVO> selectToDos() throws Exception;
}
