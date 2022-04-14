import java.util.Arrays;
import java.util.Scanner;

public class Arraylength {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] arr = new int[N + 1];
        int addNum = 10;
        int max = 0;
        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
            if (arr[i] > max) { // 최댓값과 마지막 값 위치를 바꾸기 위해서
                max = arr[i];
            }
        }
        int pos, value;
        System.out.println("삽입(index/값) 입력 : "); // 삽입 알고리즘
        pos = sc.nextInt();
        value = sc.nextInt();

        for (int i = N; i > pos; i--) {
            arr[i] = arr[i - 1];
        }
    }

}