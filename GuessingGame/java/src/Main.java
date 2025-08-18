import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        boolean flag = false;
        int tries = 0;

        int target = (int) (Math.random()* (90-65+1))+65;
        char targetLetter = (char) target;

        while(!flag && tries < 10){
            System.out.print("Enter Your Input : ");
            String input = scanner.nextLine();

            if(input.length() != 1) {
                System.out.println("Please input one letter");
                continue;
            }

            char letter = input.toUpperCase().charAt(0);
            if(letter < 65 || letter > 90){
                System.out.println("Please input from A-Z only");
                continue;
            }

            int diff = Math.abs(letter - target);
            tries++;

            if(diff == 0){
                flag = true;
            }else if(diff <=2){
                System.out.println("HOT");
            }else if(diff <=4){
                System.out.println("WARM");
            }else if(diff <=6){
                System.out.println("COOL");
            }else{
                System.out.println("COLD");
            }
        }

        if(flag){
            System.out.println("Congratulation. You won. You find the letter in "+tries+" tries");
        }else{
            System.out.println("Sorry. Your chance ended. The letter is "+targetLetter+".");
        }

    }
}

// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z