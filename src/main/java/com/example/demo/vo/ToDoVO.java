package com.example.demo.vo;

import java.util.Date;

public class ToDoVO {
	private int idx;
	private Date toDo_date;
	private String parsed_toDoDate;
	private String content;
	private String type;
	
	public int getIdx() {
		return idx;
	}
	public void setIdx(int idx) {
		this.idx = idx;
	}
	public Date getToDo_date() {
		return toDo_date;
	}
	public void setToDo_date(Date toDo_date) {
		this.toDo_date = toDo_date;
	}
	public String getParsed_toDoDate() {
		return parsed_toDoDate;
	}
	public void setParsed_toDoDate(String parsed_toDoDate) {
		this.parsed_toDoDate = parsed_toDoDate;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
	
}
