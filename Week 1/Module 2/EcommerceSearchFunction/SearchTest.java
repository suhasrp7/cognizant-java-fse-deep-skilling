import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

    // Linear Search
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String name) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            int result =
                    products[mid].productName.compareToIgnoreCase(name);

            if (result == 0) {
                return products[mid];
            }

            if (result < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories")
        };

        // Linear Search
        Product result1 = linearSearch(products, "Shoes");

        if (result1 != null) {
            System.out.println("Linear Search Found: "
                    + result1.productName);
        }

        // Sort before Binary Search
        Arrays.sort(products,
                Comparator.comparing(p -> p.productName));

        Product result2 = binarySearch(products, "Shoes");

        if (result2 != null) {
            System.out.println("Binary Search Found: "
                    + result2.productName);
        }
    }
}