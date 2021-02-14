package com.example.demo.vo;

import java.util.Date;

public class NotiVO {
	private int idx;
	private String writer;
	private String title;
	private String content;
	private Date noti_date;
	private String parsed_date;
	
	public String getParsed_date() {
		return parsed_date;
	}
	public void setParsed_date(String parsed_date) {
		this.parsed_date = parsed_date;
	}
	public int getIdx() {
		return idx;
	}
	public void setIdx(int idx) {
		this.idx = idx;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getNoti_date() {
		return noti_date;
	}
	public void setNoti_date(Date noti_date) {
		this.noti_date = noti_date;
	}

}
