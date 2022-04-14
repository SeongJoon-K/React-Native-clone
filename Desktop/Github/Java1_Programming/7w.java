public class 7w {
    public static void main(String[] args) {
        class apt {
            int room; // 아파트의 세대 필
            String aptname; // 아파트의 동 필
        
            int getmonFee(int room, String aptname) { // 타입 별 입대료 계산 메소
                if (aptname == "Atype") {
                    return room * 250000;
                } else {
                    return room * 340000;
                }
            }
            int getTotalSpace(int room, String aptname) {
                if (aptname == "Atype") {
                    return room * 32;
                } else {
                    return room* 24;
                }
            }
        }
        
        public class Main {
            
            
            public static void main(String[] args) {
                // TODO Auto-generated method stub
                apt fee;
                fee = new apt();
                int Amonfee = fee.getmonFee(230, "Atype"); //A 타입의 임대료 총합 
                System.out.println("A타입의 임대료 총합은 : " + Amonfee);
                
                int Bspace = fee.getTotalSpace(54, "Btype");
                System.out.println("B타입의 총 면적의 합 : " + Bspace);
                
            }
        }
        /* APT 
         -------
         room
         aptname
         -------
        getmonFee()
        getTotalSapce()
         */
    }
}