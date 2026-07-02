package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class App {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("Bean Count: " + context.getBeanDefinitionCount());

        for (String bean : context.getBeanDefinitionNames()) {
            System.out.println(bean);
        }

        BookService service = context.getBean("bookService", BookService.class);

        service.displayBook();
    }
}