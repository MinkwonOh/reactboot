package com.example.demo;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.NotiDAO;
import com.example.demo.vo.NotiVO;

@RestController
@MapperScan(basePackages = "com.example.demo.dao")
public class HelloController {
	@GetMapping("/api/hello")
	public String hello(){
		return " 현재 서버시간은 " + new Date() +"입니다. \n";
	}
	
	@Autowired
	private NotiDAO notiDAO;
	
	@RequestMapping("/api/noti")
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
	
}