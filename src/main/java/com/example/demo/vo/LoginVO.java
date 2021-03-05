package com.example.demo.vo;

import java.util.Date;

public class LoginVO {
	private int idx;
	private String id;
	private String pwd;
	private int fk_memtypeidx;
	private String email;

	public void setIdx(int idx){
		this.idx = idx;
	}

	public int getIdx(){
		return idx;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getId(){
		return id;
	}

	public void setPwd(String pwd){
		this.pwd = pwd;
	}

	public String getPwd(){
		return pwd;
	}

	public void setFk_memtypeidx(int fk_memtypeidx){
		this.fk_memtypeidx = fk_memtypeidx;
	}

	public int getFk_memtypeidx(){
		return fk_memtypeidx;
	}

	public void setEmail(String email){
		this.email = email;
	}

	public String getEmail(){
		return email;
	}

}
