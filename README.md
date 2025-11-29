# 🎬 Movie Review Application

A collaborative full-stack web application for submitting and viewing movie reviews.  
This project allows users to share their thoughts on movies through a clean and responsive interface.

---

## 📌 Features

- ⭐ Submit movie reviews with:
  - Movie name  
  - Reviewer name  
  - Review text  
  - Rating (1–5 scale)  
  - Auto-captured timestamp  

- 📄 View all submitted reviews  
- 📱 Responsive and modern UI  
- 🔒 Secure backend storage (Firebase/Supabase)  
- ⚡ Fast frontend built using Lovable.dev  

---

## 🗂️ Database Schema

The project uses a single table: **`movie_reviews`**

| Column            | Type         | Description                          |
|-------------------|--------------|--------------------------------------|
| `id`              | int8         | Primary key                          |
| `date_submitted`  | timestamptz  | Timestamp when review was submitted  |
| `movie_name`      | text         | Name of the movie                    |
| `reviewer_name`   | text         | Name of the reviewer                 |
| `review_text`     | text         | Review content                       |
| `rating`          | int2         | Rating (1–5)                         |

---

## 🛠️ Tech Stack

### **Frontend**
- Lovable.dev  
- HTML, CSS, JavaScript

### **Backend**
- Firebase or Supabase  
- Real-time database support  
- Secure API routes

### **Version Control**
- Git & GitHub  

---

## 🚀 How It Works

1. User fills in movie details and rating  
2. Frontend sends the review data to Firebase/Supabase  
3. Review is stored in the `movie_reviews` table  
4. All reviews are fetched and displayed instantly  

---

## 📦 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/movie-review-app.git
