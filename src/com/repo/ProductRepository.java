package com.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.collections.MongoCollections;
import com.model.Product;

@Repository
public class ProductRepository {

	@Autowired
	private MongoTemplate mongoTemplate;

	public List<Product> getAllProducts() {
		return mongoTemplate.findAll(Product.class, MongoCollections.PRODUCT_COLLECTION);
	}

}
