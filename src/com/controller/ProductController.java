package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.model.Product;
import com.repo.ProductRepository;

@Controller
public class ProductController {

	@Autowired
	private ProductRepository productRepo;

	@RequestMapping(value = "/getProductList", method = RequestMethod.POST)
	public @ResponseBody List<Product> getProducs() {
		return productRepo.getAllProducts();
	}
}
