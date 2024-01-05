import React from "react";

function Contact() {
  return (
    <form action="/action_page.php" className="container container-fluid">
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">
          Email:
        </label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
      </div>
      <div class="mb-3">
        <label for="subject" class="form-label">
          Subject:
        </label>
        <input type="subject" class="form-control" id="subject" placeholder="Enter subject" name="subject" />
      </div>
      <label for="comment">Comments:</label>
      <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Contact;
