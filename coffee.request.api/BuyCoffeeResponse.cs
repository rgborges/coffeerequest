namespace coffee.request.api.Controllers;


public record class BuyCoffeeResponse {
      public Guid uuid { get; set; }
      public bool Result { get; set; }
      public string Message { get; set; } = string.Empty;
}