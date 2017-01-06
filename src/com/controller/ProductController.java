package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.model.Product;
import com.repo.ProductRepository;

@Controller
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductRepository productRepo;

	@RequestMapping(value = "/getProductList", method = RequestMethod.POST)
	public @ResponseBody Map<String, List<Product>> getProducs() {
		Map<String, List<Product>> products = new HashMap<String, List<Product>>();
		products.put("products", productRepo.getAllProducts());
		return products;
	}
}
