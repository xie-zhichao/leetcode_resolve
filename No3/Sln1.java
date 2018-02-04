/**
 * Sln1
 */
public class Sln1 {

    public static int lengthOfLongestSubstring(String s) {
        int len=0, maxSublen=0, n=0;
        if(s!=null){
            len = s.length();
        }
        StringBuilder sBuilder = new StringBuilder();
        Character c;
        for(int i=0; i<len; i++){
            c = s.charAt(i);
            n = sBuilder.indexOf(c.toString());
            //System.out.println(sBuilder.toString());
 
            if(n > -1) {
                sBuilder.delete(0, n+1);
            }
            sBuilder.append(c);
            if(sBuilder.length() > maxSublen) {
                maxSublen = sBuilder.length();
            }
        }

        return maxSublen;
    }
}