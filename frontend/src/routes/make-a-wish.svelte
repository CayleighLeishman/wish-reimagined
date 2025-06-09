<h1 id="wish-form-title">Make a Wish for Magnifico's Vault</h1>

<form 
  action="https://example.com/magnificos-vault" 
  method="POST" 
  aria-labelledby="wish-form-title"
>
  <div>
    <label for="wish">I Wish:</label><br>
    <textarea
      id="wish"
      name="wish"
      rows="4"
      cols="50"
      required
      aria-required="true"
      aria-describedby="wish-desc"
    ></textarea><br>
    <span id="wish-desc">Describe your wish in detail. This field is required.</span>
  </div>

  <div>
    <label for="name">Your Name (optional):</label><br>
    <input type="text" id="name" name="name" autocomplete="name"><br>
  </div>

  <button type="submit">Submit Wish</button>
</form>
