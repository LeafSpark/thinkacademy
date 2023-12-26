package com.tal.app.thinkacademy.lib.util;

import androidx.collection.SimpleArrayMap;
import com.tal.app.thinkacademy.lib.util.constant.RegexConstants;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public final class RegexUtils {
    private static final SimpleArrayMap<String, String> CITY_MAP = new SimpleArrayMap<>();
    private static String regularexpression = "(((https|http|ftp|rtsp|mms)://)?((w|W){3})?)?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\\.){3}|([0-9a-zA-Z_!~*'()-]+\\.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-z]\\.[a-zA-Z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9A-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?).*";

    private RegexUtils() {
        throw new UnsupportedOperationException("u can't instantiate me...");
    }

    public static boolean isMobileSimple(CharSequence charSequence) {
        return isMatch(RegexConstants.REGEX_MOBILE_SIMPLE, charSequence);
    }

    public static boolean isMobileExact(CharSequence charSequence) {
        return isMobileExact(charSequence, (List<String>) null);
    }

    public static boolean isMobileExact(CharSequence charSequence, List<String> list) {
        if (isMatch(RegexConstants.REGEX_MOBILE_EXACT, charSequence)) {
            return true;
        }
        if (!(list == null || charSequence == null || charSequence.length() != 11)) {
            String charSequence2 = charSequence.toString();
            for (char isDigit : charSequence2.toCharArray()) {
                if (!Character.isDigit(isDigit)) {
                    return false;
                }
            }
            for (String startsWith : list) {
                if (charSequence2.startsWith(startsWith)) {
                    return true;
                }
            }
        }
        return false;
    }

    public static boolean isTel(CharSequence charSequence) {
        return isMatch(RegexConstants.REGEX_TEL, charSequence);
    }

    public static boolean isIDCard15(CharSequence charSequence) {
        return isMatch(RegexConstants.REGEX_ID_CARD15, charSequence);
    }

    public static boolean isIDCard18(CharSequence charSequence) {
        return isMatch(RegexConstants.REGEX_ID_CARD18, charSequence);
    }

    public static boolean isIDCard18Exact(CharSequence charSequence) {
        if (!isIDCard18(charSequence)) {
            return false;
        }
        int[] iArr = {7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2};
        char[] cArr = {'1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'};
        SimpleArrayMap<String, String> simpleArrayMap = CITY_MAP;
        if (simpleArrayMap.isEmpty()) {
            simpleArrayMap.put("11", "北京");
            simpleArrayMap.put("12", "天津");
            simpleArrayMap.put("13", "河北");
            simpleArrayMap.put("14", "山西");
            simpleArrayMap.put("15", "内蒙古");
            simpleArrayMap.put("21", "辽宁");
            simpleArrayMap.put("22", "吉林");
            simpleArrayMap.put("23", "黑龙江");
            simpleArrayMap.put("31", "上海");
            simpleArrayMap.put("32", "江苏");
            simpleArrayMap.put("33", "浙江");
            simpleArrayMap.put("34", "安徽");
            simpleArrayMap.put("35", "福建");
            simpleArrayMap.put("36", "江西");
            simpleArrayMap.put("37", "山东");
            simpleArrayMap.put("41", "河南");
            simpleArrayMap.put("42", "湖北");
            simpleArrayMap.put("43", "湖南");
            simpleArrayMap.put("44", "广东");
            simpleArrayMap.put("45", "广西");
            simpleArrayMap.put("46", "海南");
            simpleArrayMap.put("50", "重庆");
            simpleArrayMap.put("51", "四川");
            simpleArrayMap.put("52", "贵州");
            simpleArrayMap.put("53", "云南");
            simpleArrayMap.put("54", "西藏");
            simpleArrayMap.put("61", "陕西");
            simpleArrayMap.put("62", "甘肃");
            simpleArrayMap.put("63", "青海");
            simpleArrayMap.put("64", "宁夏");
            simpleArrayMap.put("65", "新疆");
            simpleArrayMap.put("71", "台湾");
            simpleArrayMap.put("81", "香港");
            simpleArrayMap.put("82", "澳门");
            simpleArrayMap.put("91", "国外");
        }
        if (simpleArrayMap.get(charSequence.subSequence(0, 2).toString()) == null) {
            return false;
        }
        int i = 0;
        for (int i2 = 0; i2 < 17; i2++) {
            i += (charSequence.charAt(i2) - '0') * iArr[i2];
        }
        if (charSequence.charAt(17) == cArr[i % 11]) {
            return true;
        }
        return false;
    }

    public static boolean isEmail(CharSequence charSequence) {
        return isMatch(RegexConstants.REGEX_EMAIL, charSequence);
    }

    public static boolean isURL(CharSequence charSequence) {
        return isMatch(RegexConstants.REGEX_URL, charSequence);
    }

    public static boolean isZh(CharSequence charSequence) {
        return isMatch(RegexConstants.REGEX_ZH, charSequence);
    }

    public static boolean isUsername(CharSequence charSequence) {
        return isMatch(RegexConstants.REGEX_USERNAME, charSequence);
    }

    public static boolean isDate(CharSequence charSequence) {
        return isMatch(RegexConstants.REGEX_DATE, charSequence);
    }

    public static boolean isIP(CharSequence charSequence) {
        return isMatch(RegexConstants.REGEX_IP, charSequence);
    }

    public static boolean isMatch(String str, CharSequence charSequence) {
        return charSequence != null && charSequence.length() > 0 && Pattern.matches(str, charSequence);
    }

    public static List<String> getMatches(String str, CharSequence charSequence) {
        if (charSequence == null) {
            return Collections.emptyList();
        }
        ArrayList arrayList = new ArrayList();
        Matcher matcher = Pattern.compile(str).matcher(charSequence);
        while (matcher.find()) {
            arrayList.add(matcher.group());
        }
        return arrayList;
    }

    public static String[] getSplits(String str, String str2) {
        return str == null ? new String[0] : str.split(str2);
    }

    public static String getReplaceFirst(String str, String str2, String str3) {
        return str == null ? "" : Pattern.compile(str2).matcher(str).replaceFirst(str3);
    }

    public static String getReplaceAll(String str, String str2, String str3) {
        return str == null ? "" : Pattern.compile(str2).matcher(str).replaceAll(str3);
    }

    public static String chatSendContentDeal(String str) {
        try {
            Matcher matcher = Pattern.compile(regularexpression).matcher(str);
            StringBuffer stringBuffer = new StringBuffer(str);
            char[] charArray = stringBuffer.toString().toCharArray();
            if (!matcher.find()) {
                return str;
            }
            int i = 1;
            for (int i2 = 0; i2 < str.length() - 1; i2++) {
                if (!isChinese(charArray[i2]) && isChinese(charArray[i2 + 1])) {
                    stringBuffer = stringBuffer.insert(i2 + i, " ");
                    i++;
                }
            }
            return stringBuffer.toString();
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }

    private static boolean isChinese(char c) {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append(c);
        return sb.toString().getBytes().length > 2;
    }
}
