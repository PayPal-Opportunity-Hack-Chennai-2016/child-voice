package com.child.voice.webservice;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class LoginController {
	
	
	@RequestMapping(value = "login", method = RequestMethod.GET)
	public String login() {
		return "Good to start";
	}

}
