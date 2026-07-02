package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public BookService() {
    }

    // Setter Injection
   public void setBookRepository(BookRepository bookRepository) {
    System.out.println("Setter Injection Successful");
    this.bookRepository = bookRepository;
}

    public void displayBook() {
        System.out.println("Book Service is running...");
        bookRepository.displayBook();
    }
}