package com.example.demo;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.NotiDAO;
import com.example.demo.dao.ToDoDAO;
import com.example.demo.vo.NotiVO;
import com.example.demo.vo.ToDoVO;

@RestController
@MapperScan(basePackages = "com.example.demo.dao")
@RequestMapping("/api/*")
public class HelloController {
	@Autowired
	private NotiDAO notiDAO;
	@Autowired
	private ToDoDAO todoDAO;
	
	@RequestMapping(value="noti",method=RequestMethod.GET)
	public List<NotiVO> selectNoti() throws Exception {
		List<NotiVO> notiList =  notiDAO.selectNoti();
		
		//mysql select값  java Date로 시간 변환 해줘야함
		for(int i = 0; i<notiList.size();i++) {
			//i번째 VO의 DB날짜값 가져옴
			Date notiDate = notiList.get(i).getNoti_date();
			
			//변환 과정
			SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String parsedDate = sdFormat.format(notiDate);
			
			//변환 된 값 VO의 parsed_date 
			notiList.get(i).setParsed_date(parsedDate);
		}
		return notiList;
	}
	
	@RequestMapping(value="cal",method=RequestMethod.GET)
	public List<ToDoVO> calTest() throws Exception {
		List<ToDoVO> toDoList =  todoDAO.selectToDos();
		
		//mysql select값  java Date로 시간 변환 해줘야함
		for(int i = 0; i<toDoList.size();i++) {
			//i번째 VO의 DB날짜값 가져옴
			Date toDoDate = toDoList.get(i).getToDo_date();
			
			//변환 과정
			SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd");
			String parsed_toDoDate = sdFormat.format(toDoDate);
			
			//변환 된 값 VO의 parsed_date 
			toDoList.get(i).setParsed_toDoDate(parsed_toDoDate);
			
			toDoList.get(i).setType("success");
		}
		
		return toDoList;
	}
	
}