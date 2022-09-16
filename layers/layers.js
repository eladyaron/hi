var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> בנייה טורית'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> בניה טורית מדורגת'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ל'
            });
var format_H_3 = new ol.format.GeoJSON();
var features_H_3 = format_H_3.readFeatures(json_H_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H_3.addFeatures(features_H_3);
var lyr_H_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_H_3, 
                style: style_H_3,
                interactive: true,
                title: '<img src="styles/legend/H_3.png" /> H מדורג'
            });
var format_H_4 = new ol.format.GeoJSON();
var features_H_4 = format_H_4.readFeatures(json_H_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H_4.addFeatures(features_H_4);
var lyr_H_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_H_4, 
                style: style_H_4,
                interactive: true,
                title: '<img src="styles/legend/H_4.png" /> H'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> רחובות רקע'
            });
var format_HUL_6 = new ol.format.GeoJSON();
var features_HUL_6 = format_HUL_6.readFeatures(json_HUL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HUL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUL_6.addFeatures(features_HUL_6);
var lyr_HUL_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HUL_6, 
                style: style_HUL_6,
                interactive: true,
                title: '<img src="styles/legend/HUL_6.png" /> מתחמי HUL'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
    title: 'מרחבי טבע עירוני<br />\
    <img src="styles/legend/_7_0.png" /> 5 - 9.6<br />\
    <img src="styles/legend/_7_1.png" /> 9.6 - 13.8<br />\
    <img src="styles/legend/_7_2.png" /> 13.8 - 16.5<br />\
    <img src="styles/legend/_7_3.png" /> 16.5 - 18.9<br />\
    <img src="styles/legend/_7_4.png" /> 18.9 - 25<br />'
        });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
    title: 'אתרי טבע עירוני<br />\
    <img src="styles/legend/_8_0.png" /> 13 - 15.8<br />\
    <img src="styles/legend/_8_1.png" /> 15.8 - 20.3<br />\
    <img src="styles/legend/_8_2.png" /> 20.3 - 25.2<br />\
    <img src="styles/legend/_8_3.png" /> 25.2 - 29.3<br />\
    <img src="styles/legend/_8_4.png" /> 29.3 - 45<br />'
        });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> מרקמי מורשת'
            });
var format__1944_10 = new ol.format.GeoJSON();
var features__1944_10 = format__1944_10.readFeatures(json__1944_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1944_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1944_10.addFeatures(features__1944_10);
var lyr__1944_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1944_10, 
                style: style__1944_10,
                interactive: true,
                title: '<img src="styles/legend/_1944_10.png" /> כפר סלמה_1944'
            });
var format_10_11 = new ol.format.GeoJSON();
var features_10_11 = format_10_11.readFeatures(json_10_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_11.addFeatures(features_10_11);
var lyr_10_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10_11, 
                style: style_10_11,
                interactive: true,
                title: '<img src="styles/legend/10_11.png" /> מקבצי מבנים ללא שנת בניה בשטח מעל 10 דונם'
            });
var format______12 = new ol.format.GeoJSON();
var features______12 = format______12.readFeatures(json______12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource______12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource______12.addFeatures(features______12);
var lyr______12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource______12, 
                style: style______12,
                interactive: true,
    title: 'טווח_שיטוט_בעלי_חיים_מבויתים<br />\
    <img src="styles/legend/_____12_0.png" /> 17<br />\
    <img src="styles/legend/_____12_1.png" /> 97<br />\
    <img src="styles/legend/_____12_2.png" /> 250<br />\
    <img src="styles/legend/_____12_3.png" /> <br />'
        });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__13, 
                style: style__13,
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> שטחים ירוקים וגנים ציבוריים בשטחים שאינם שצפ או דרך קיימת'
            });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__14, 
                style: style__14,
                interactive: true,
                title: '<img src="styles/legend/_14.png" /> בנייני מגורים סביב שטח פתוח משותף'
            });
var format__15 = new ol.format.GeoJSON();
var features__15 = format__15.readFeatures(json__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__15.addFeatures(features__15);
var lyr__15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__15, 
                style: style__15,
                interactive: true,
                title: '<img src="styles/legend/_15.png" /> מבנים ואתרים לשימור'
            });
var format_48_16 = new ol.format.GeoJSON();
var features_48_16 = format_48_16.readFeatures(json_48_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_48_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_48_16.addFeatures(features_48_16);
var lyr_48_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_48_16, 
                style: style_48_16,
                interactive: true,
                title: '<img src="styles/legend/48_16.png" /> טרום 48 לא בשכונה יהודית'
            });
var format_1948_17 = new ol.format.GeoJSON();
var features_1948_17 = format_1948_17.readFeatures(json_1948_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1948_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1948_17.addFeatures(features_1948_17);
var lyr_1948_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1948_17, 
                style: style_1948_17,
                interactive: true,
                title: '<img src="styles/legend/1948_17.png" /> מבנים שנבנו טרום 1948'
            });
var format__18 = new ol.format.GeoJSON();
var features__18 = format__18.readFeatures(json__18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__18.addFeatures(features__18);
var lyr__18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__18, 
                style: style__18,
                interactive: true,
                title: '<img src="styles/legend/_18.png" /> נחלים'
            });
var format__19 = new ol.format.GeoJSON();
var features__19 = format__19.readFeatures(json__19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__19.addFeatures(features__19);
var lyr__19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__19, 
                style: style__19,
                interactive: true,
    title: 'צירים ירוקים וקישוריות אקולוגית<br />\
    <img src="styles/legend/_19_0.png" /> ציר ירוק מטרופוליני<br />\
    <img src="styles/legend/_19_1.png" /> ציר ירוק רובעי מזרח-מערב<br />\
    <img src="styles/legend/_19_2.png" /> ציר ירוק רובעי צפון-דרום<br />\
    <img src="styles/legend/_19_3.png" /> ציר ירוק שכונתי<br />\
    <img src="styles/legend/_19_4.png" /> <br />'
        });
var format____20 = new ol.format.GeoJSON();
var features____20 = format____20.readFeatures(json____20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____20.addFeatures(features____20);
var lyr____20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource____20, 
                style: style____20,
                interactive: true,
    title: 'ערכיות_קישוריות_אקולוגית<br />\
    <img src="styles/legend/___20_0.png" /> 5 - 12.38<br />\
    <img src="styles/legend/___20_1.png" /> 12.38 - 16.32<br />\
    <img src="styles/legend/___20_2.png" /> 16.32 - 17.12<br />\
    <img src="styles/legend/___20_3.png" /> 17.12 - 23.48<br />\
    <img src="styles/legend/___20_4.png" /> 23.48 - 28.86<br />'
        });
var format__21 = new ol.format.GeoJSON();
var features__21 = format__21.readFeatures(json__21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__21.addFeatures(features__21);
var lyr__21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__21, 
                style: style__21,
                interactive: true,
    title: 'רחובות מסוגים ייחודיים<br />\
    <img src="styles/legend/_21_0.png" /> גשר<br />\
    <img src="styles/legend/_21_1.png" /> כיכר<br />\
    <img src="styles/legend/_21_2.png" /> משעול<br />\
    <img src="styles/legend/_21_3.png" /> סמטת<br />\
    <img src="styles/legend/_21_4.png" /> שביל<br />\
    <img src="styles/legend/_21_5.png" /> שדרות<br />\
    <img src="styles/legend/_21_6.png" /> <br />'
        });
var format___22 = new ol.format.GeoJSON();
var features___22 = format___22.readFeatures(json___22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___22.addFeatures(features___22);
var lyr___22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___22, 
                style: style___22,
                interactive: true,
                title: '<img src="styles/legend/__22.png" /> משארי_כורכר'
            });
var format_1949_23 = new ol.format.GeoJSON();
var features_1949_23 = format_1949_23.readFeatures(json_1949_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1949_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1949_23.addFeatures(features_1949_23);
var lyr_1949_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1949_23, 
                style: style_1949_23,
                interactive: true,
                title: '<img src="styles/legend/1949_23.png" /> רחובות מצטלבים עם צירים היסטוריים 1949'
            });
var format_100_24 = new ol.format.GeoJSON();
var features_100_24 = format_100_24.readFeatures(json_100_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100_24.addFeatures(features_100_24);
var lyr_100_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100_24, 
                style: style_100_24,
                interactive: true,
                title: '<img src="styles/legend/100_24.png" /> שכונות ומתחמים תל אביב 100'
            });
var format____25 = new ol.format.GeoJSON();
var features____25 = format____25.readFeatures(json____25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____25.addFeatures(features____25);
var lyr____25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource____25, 
                style: style____25,
                interactive: true,
    title: 'נק_עניין_מאוחד<br />\
    <img src="styles/legend/___25_0.png" /> אובייקטים נופיים לשימור<br />\
    <img src="styles/legend/___25_1.png" /> בתי כנסת נבחרים<br />\
    <img src="styles/legend/___25_2.png" /> בתי ספר נבנו עד 1965<br />\
    <img src="styles/legend/___25_3.png" /> מבנים חקלאים טרום 1948<br />\
    <img src="styles/legend/___25_4.png" /> מבנים מיוחדים<br />\
    <img src="styles/legend/___25_5.png" /> מפות מספרות<br />\
    <img src="styles/legend/___25_6.png" /> נקודות עניין_מדיניות שימור_סיורים<br />\
    <img src="styles/legend/___25_7.png" /> פה גר<br />\
    <img src="styles/legend/___25_8.png" /> פסלי חוצות<br />\
    <img src="styles/legend/___25_9.png" /> <br />'
        });
var format__26 = new ol.format.GeoJSON();
var features__26 = format__26.readFeatures(json__26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__26.addFeatures(features__26);
var lyr__26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__26, 
                style: style__26,
                interactive: true,
                title: '<img src="styles/legend/_26.png" /> תיעוד ויזואלי'
            });
var format___27 = new ol.format.GeoJSON();
var features___27 = format___27.readFeatures(json___27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___27.addFeatures(features___27);
var lyr___27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___27, 
                style: style___27,
                interactive: true,
    title: 'ממצאים_נקודתיים<br />\
    <img src="styles/legend/__27_0.png" /> אתר גיאולוגי<br />\
    <img src="styles/legend/__27_1.png" /> אתר פריחה<br />\
    <img src="styles/legend/__27_2.png" /> אתר צפרות<br />\
    <img src="styles/legend/__27_3.png" /> בוסתן/ חקלאות מסורתית<br />\
    <img src="styles/legend/__27_4.png" /> בית גידול ייחודי<br />\
    <img src="styles/legend/__27_5.png" /> בית גידול לח עונתי<br />\
    <img src="styles/legend/__27_6.png" /> בריכת נוי<br />\
    <img src="styles/legend/__27_7.png" /> גינה קהילתית<br />\
    <img src="styles/legend/__27_8.png" /> גינון בצמחייה מקומית<br />\
    <img src="styles/legend/__27_9.png" /> מבנה ישן<br />\
    <img src="styles/legend/__27_10.png" /> ממצא ארכיאולוגי<br />\
    <img src="styles/legend/__27_11.png" /> נקודת עניין אחרת<br />\
    <img src="styles/legend/__27_12.png" /> עץ בולט/ מיוחד<br />\
    <img src="styles/legend/__27_13.png" /> צמח אדום<br />\
    <img src="styles/legend/__27_14.png" /> (צמח ייחודי)<br />\
    <img src="styles/legend/__27_15.png" /> צמח נדיר/ ייחודי<br />\
    <img src="styles/legend/__27_16.png" /> צמחי מים וסביבה לחה<br />\
    <img src="styles/legend/__27_17.png" /> <br />'
        });
var format___28 = new ol.format.GeoJSON();
var features___28 = format___28.readFeatures(json___28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___28.addFeatures(features___28);
var lyr___28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___28, 
                style: style___28,
                interactive: true,
                title: '<img src="styles/legend/__28.png" /> מפגעים_ומטרדים'
            });
var format___29 = new ol.format.GeoJSON();
var features___29 = format___29.readFeatures(json___29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___29.addFeatures(features___29);
var lyr___29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___29, 
                style: style___29,
                interactive: true,
                title: '<img src="styles/legend/__29.png" /> בעלי_חיים'
            });
var format____30 = new ol.format.GeoJSON();
var features____30 = format____30.readFeatures(json____30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____30.addFeatures(features____30);
var lyr____30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource____30, 
                style: style____30,
                interactive: true,
                title: '<img src="styles/legend/___30.png" /> תשתיות_קליטת_קהל'
            });
var group_ = new ol.layer.Group({
                                layers: [lyr__0,lyr__1,lyr__2,lyr_H_3,lyr_H_4,],
                                title: "טיפולוגיות בניה"});

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr_H_3.setVisible(true);lyr_H_4.setVisible(true);lyr__5.setVisible(true);lyr_HUL_6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__1944_10.setVisible(true);lyr_10_11.setVisible(true);lyr______12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);lyr__15.setVisible(true);lyr_48_16.setVisible(true);lyr_1948_17.setVisible(true);lyr__18.setVisible(true);lyr__19.setVisible(true);lyr____20.setVisible(true);lyr__21.setVisible(true);lyr___22.setVisible(true);lyr_1949_23.setVisible(true);lyr_100_24.setVisible(true);lyr____25.setVisible(true);lyr__26.setVisible(true);lyr___27.setVisible(true);lyr___28.setVisible(true);lyr___29.setVisible(true);lyr____30.setVisible(true);
var layersList = [group_,lyr__5,lyr_HUL_6,lyr__7,lyr__8,lyr__9,lyr__1944_10,lyr_10_11,lyr______12,lyr__13,lyr__14,lyr__15,lyr_48_16,lyr_1948_17,lyr__18,lyr__19,lyr____20,lyr__21,lyr___22,lyr_1949_23,lyr_100_24,lyr____25,lyr__26,lyr___27,lyr___28,lyr___29,lyr____30];
lyr__0.set('fieldAliases', {'fid': 'fid', 'oid_mivne': 'oid_mivne', 'id_binyan': 'id_binyan', 't_sug_mivn': 't_sug_mivn', 'ms_komot': 'ms_komot', 'shem_mivne': 'shem_mivne', 't_amudim': 't_amudim', 'date_impor': 'date_impor', 'id_binyan_': 'id_binyan_', 'UniqueId': 'UniqueId', 'gova_mpi_2': 'gova_mpi_2', 'gova_simpl': 'gova_simpl', 'min_height': 'min_height', 'max_height': 'max_height', 'year': 'year', 'area_cover': 'area_cover', 'FLOOR_AREA': 'FLOOR_AREA', 'vol': 'vol', 'calc_komot': 'calc_komot', });
lyr__1.set('fieldAliases', {'oid_mivne': 'oid_mivne', 'id_binyan': 'id_binyan', 't_sug_mivn': 't_sug_mivn', 'ms_komot': 'ms_komot', 'shem_mivne': 'shem_mivne', 't_amudim': 't_amudim', 'date_impor': 'date_impor', 'id_binyan_': 'id_binyan_', 'UniqueId': 'UniqueId', 'gova_mpi_2': 'gova_mpi_2', 'gova_simpl': 'gova_simpl', 'min_height': 'min_height', 'max_height': 'max_height', 'year': 'year', 'area_cover': 'area_cover', 'FLOOR_AREA': 'FLOOR_AREA', 'vol': 'vol', 'calc_komot': 'calc_komot', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'oid_mivne': 'oid_mivne', 'id_binyan': 'id_binyan', 't_sug_mivn': 't_sug_mivn', 'ms_komot': 'ms_komot', 'shem_mivne': 'shem_mivne', 't_amudim': 't_amudim', 'date_impor': 'date_impor', 'id_binyan_': 'id_binyan_', 'UniqueId': 'UniqueId', 'gova_mpi_2': 'gova_mpi_2', 'gova_simpl': 'gova_simpl', 'min_height': 'min_height', 'max_height': 'max_height', 'year': 'year', 'area_cover': 'area_cover', 'FLOOR_AREA': 'FLOOR_AREA', 'vol': 'vol', 'calc_komot': 'calc_komot', 'layer': 'layer', 'path': 'path', });
lyr_H_3.set('fieldAliases', {'oid_mivne': 'oid_mivne', 'id_binyan': 'id_binyan', 't_sug_mivn': 't_sug_mivn', 'ms_komot': 'ms_komot', 'shem_mivne': 'shem_mivne', 't_amudim': 't_amudim', 'date_impor': 'date_impor', 'id_binyan_': 'id_binyan_', 'UniqueId': 'UniqueId', 'gova_mpi_2': 'gova_mpi_2', 'gova_simpl': 'gova_simpl', 'min_height': 'min_height', 'max_height': 'max_height', 'year': 'year', 'area_cover': 'area_cover', 'FLOOR_AREA': 'FLOOR_AREA', 'vol': 'vol', 'calc_komot': 'calc_komot', });
lyr_H_4.set('fieldAliases', {'id': 'id', });
lyr__5.set('fieldAliases', {'Shape_Area': 'Shape_Area', 'Shape_Length': 'Shape_Length', 'oid': 'מזהה ממג', 'date_import': 'תאריך טעינה', });
lyr_HUL_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'SiteID': 'SiteID', 'SiteName': 'SiteName', 'PlaceName': 'PlaceName', 'GlobalID': 'GlobalID', 'type': 'type', 'neighborho': 'neighborho', 'Main': 'Main', 'Enviro': 'Enviro', 'Eco': 'Eco', 'Social': 'Social', 'Total': 'Total', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'id': 'id', 'neighborH': 'neighborH', 'site_name': 'site_name', 'oid_shchun': 'oid_shchun', 'ms_shchuna': 'ms_shchuna', 'date_impor': 'date_impor', 'shem_shchu': 'shem_shchu', 'UniqueId': 'UniqueId', 'OID_SH': 'OID_SH', 'year': 'year', 'oid_rechov': 'oid_rechov', 'k_rechov': 'k_rechov', 't_rechov': 't_rechov', 'shem_angli': 'shem_angli', 'ms_lamas': 'ms_lamas', 't_sug': 't_sug', 'k_kivun': 'k_kivun', 'OBJECTID_2': 'OBJECTID_2', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'OBJECTID': 'OBJECTID', 'Number': 'Number', 'Name': 'Name', 'Address': 'Address', 'Spatial': 'Spatial', 'layer': 'layer', 'path': 'path', });
lyr__7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'SiteID': 'מזהה אתר', 'SiteName': 'שם אתר', 'PlaceName': 'שם ישוב', 'GlobalID': 'GlobalID', 'type': 'type', 'neighborhood': 'neighborhood', 'Main': 'Main', 'Enviro': 'Enviro', 'Eco': 'Eco', 'Social': 'Social', 'Total': 'Total', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr__8.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'SiteID': 'מזהה אתר', 'SiteName': 'שם אתר', 'PlaceName': 'שם ישוב', 'GlobalID': 'GlobalID', 'type': 'type', 'neighborhood': 'neighborhood', 'Main': 'Main', 'Enviro': 'Enviro', 'Eco': 'Eco', 'Social': 'Social', 'Total': 'Total', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr__9.set('fieldAliases', {'id': 'id', 'neighborH': 'neighborH', 'site_name': 'site_name', });
lyr__1944_10.set('fieldAliases', {'id': 'id', });
lyr_10_11.set('fieldAliases', {'oid_mivne': 'oid_mivne', 'id_binyan': 'id_binyan', 't_sug_mivn': 't_sug_mivn', 'ms_komot': 'ms_komot', 'shem_mivne': 'shem_mivne', 't_amudim': 't_amudim', 'date_impor': 'date_impor', 'id_binyan_': 'id_binyan_', 'UniqueId': 'UniqueId', 'gova_mpi_2': 'gova_mpi_2', 'gova_simpl': 'gova_simpl', 'min_height': 'min_height', 'max_height': 'max_height', 'year': 'year', 'area': 'area', });
lyr______12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SP_Name': 'שם מין', 'WanderingRange': 'טווח שיטוט', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr__13.set('fieldAliases', {'fid': 'fid', 'oid_shetac': 'oid_shetac', 'ms_shefa': 'ms_shefa', 'shem_gan': 'shem_gan', 'sug_gan': 'sug_gan', 'shem_gan_t': 'shem_gan_t', 'sw_nagish': 'sw_nagish', 'date_impor': 'date_impor', 'ms_area': 'ms_area', 'UniqueId': 'UniqueId', 'oid_migras': 'oid_migras', 'ms_gush': 'ms_gush', 'k_status_h': 'k_status_h', 'ms_migrash': 'ms_migrash', 'st_mispar_': 'st_mispar_', 'st_taba': 'st_taba', 'st_taba_ka': 'st_taba_ka', 'k_yeud_kar': 'k_yeud_kar', 't_yeud_kar': 't_yeud_kar', 'k_yeud_ras': 'k_yeud_ras', 't_yeud_ras': 't_yeud_ras', 'ms_shetach': 'ms_shetach', 'date_imp_1': 'date_imp_1', 'ta_5000_de': 'ta_5000_de', 'area': 'area', });
lyr__14.set('fieldAliases', {'oid_migras': 'oid_migras', 'ms_gush': 'ms_gush', 'k_status_h': 'k_status_h', 'ms_migrash': 'ms_migrash', 'st_mispar_': 'st_mispar_', 'st_taba': 'st_taba', 'st_taba_ka': 'st_taba_ka', 'k_yeud_kar': 'k_yeud_kar', 't_yeud_kar': 't_yeud_kar', 'k_yeud_ras': 'k_yeud_ras', 't_yeud_ras': 't_yeud_ras', 'ms_shetach': 'ms_shetach', 'date_impor': 'date_impor', 'ta_5000_de': 'ta_5000_de', 'yeud_zone': 'yeud_zone', 'area_sqm': 'area_sqm', 'rahak_bas1': 'rahak_bas1', 'rahak_max1': 'rahak_max1', 'year_tokef': 'year_tokef', 'yeartokef': 'yeartokef', 'year_haf': 'year_haf', });
lyr__15.set('fieldAliases', {'oid': 'מזהה ממג', 'shem_mivne': 'שם מבנה', 't_hatraa': 'תיאור התראה', 'st_taba': 'שם תב"ע', 'sw_history': 'היסטורי', 'ktovot': 'כתובות', 'hagbalot': 'הגבלות מחמירות', 'atraa_warn': 'הערה להתראה', 'tr_hatraot': 'תאריך התראות', 'date_impor': 'date_impor', });
lyr_48_16.set('fieldAliases', {'oid_mivne': 'oid_mivne', 'id_binyan': 'id_binyan', 't_sug_mivn': 't_sug_mivn', 'ms_komot': 'ms_komot', 'shem_mivne': 'shem_mivne', 't_amudim': 't_amudim', 'date_impor': 'date_impor', 'id_binyan_': 'id_binyan_', 'UniqueId': 'UniqueId', 'gova_mpi_2': 'gova_mpi_2', 'gova_simpl': 'gova_simpl', 'min_height': 'min_height', 'max_height': 'max_height', 'year': 'year', 'area_cover': 'area_cover', 'FLOOR_AREA': 'FLOOR_AREA', 'vol': 'vol', 'calc_komot': 'calc_komot', });
lyr_1948_17.set('fieldAliases', {'oid_mivne': 'oid_mivne', 'id_binyan': 'id_binyan', 't_sug_mivn': 't_sug_mivn', 'ms_komot': 'ms_komot', 'shem_mivne': 'shem_mivne', 't_amudim': 't_amudim', 'date_impor': 'date_impor', 'id_binyan_': 'id_binyan_', 'UniqueId': 'UniqueId', 'gova_mpi_2': 'gova_mpi_2', 'gova_simpl': 'gova_simpl', 'min_height': 'min_height', 'max_height': 'max_height', 'year': 'year', 'area_cover': 'area_cover', 'FLOOR_AREA': 'FLOOR_AREA', 'vol': 'vol', 'calc_komot': 'calc_komot', 'kav_binyan': 'kav_binyan', });
lyr__18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UNIQ_ID': 'UNIQ_ID', 'PARENT': 'PARENT', 'FCODE': 'FCODE', 'FTYPE': 'FTYPE', 'FSTATUS': 'FSTATUS', 'HYDRO_NET': 'HYDRO_NET', 'STRM_ORDER': 'STRM_ORDER', 'ACC_LEN': 'ACC_LEN', 'FNAME_CODE': 'FNAME_CODE', 'FNAME': 'FNAME', 'LATIN_NAME': 'LATIN_NAME', 'ORIG_LEN': 'ORIG_LEN', 'DATA_YEAR': 'DATA_YEAR', 'PRDCT_VER': 'PRDCT_VER', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr__19.set('fieldAliases', {'OBJECTID_12': 'OBJECTID_12', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'OBJECTID': 'OBJECTID', 'Type': 'Type', 'Number': 'Number', 'Name': 'Name', 'Address': 'Address', 'Spatial': 'Spatial', 'Enviro': 'Enviro', 'Eco': 'Eco', 'Social': 'Social', 'Total': 'Total', 'Shape_Length': 'Shape_Length', });
lyr____20.set('fieldAliases', {'OBJECTID_12': 'OBJECTID_12', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'OBJECTID': 'OBJECTID', 'Type': 'Type', 'Number': 'Number', 'Name': 'Name', 'Address': 'Address', 'Spatial': 'Spatial', 'Enviro': 'Enviro', 'Eco': 'Eco', 'Social': 'Social', 'Total': 'Total', 'Shape_Length': 'Shape_Length', });
lyr__21.set('fieldAliases', {'oid_rechov': 'oid_rechov', 'k_rechov': 'k_rechov', 't_rechov': 't_rechov', 'shem_angli': 'shem_angli', 'ms_lamas': 'ms_lamas', 't_sug': 't_sug', 'k_kivun': 'k_kivun', 'UniqueId': 'UniqueId', });
lyr___22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Number': 'מספר', 'Remarks': 'פירוט', 'GlobalID': 'GlobalID', 'Shape_Length': 'Shape_Length', });
lyr_1949_23.set('fieldAliases', {'oid_rechov': 'oid_rechov', 'k_rechov': 'k_rechov', 't_rechov': 't_rechov', 'shem_angli': 'shem_angli', 'ms_lamas': 'ms_lamas', 't_sug': 't_sug', 'k_kivun': 'k_kivun', 'UniqueId': 'UniqueId', });
lyr_100_24.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Point_x': 'Point_x', 'Point_y': 'Point_y', });
lyr____25.set('fieldAliases', {'oid': 'oid', 'shem_mivne': 'shem_mivne', 't_hatraa': 't_hatraa', 'st_taba': 'st_taba', 'sw_history': 'sw_history', 'ktovot': 'ktovot', 'hagbalot': 'hagbalot', 'atraa_warn': 'atraa_warn', 'tr_hatraot': 'tr_hatraot', 'date_impor': 'date_impor', 'oid_mivne': 'oid_mivne', 'id_binyan': 'id_binyan', 't_sug_mivn': 't_sug_mivn', 'ms_komot': 'ms_komot', 't_amudim': 't_amudim', 'id_binyan_': 'id_binyan_', 'UniqueId': 'UniqueId', 'gova_mpi_2': 'gova_mpi_2', 'gova_simpl': 'gova_simpl', 'min_height': 'min_height', 'max_height': 'max_height', 'year': 'year', 'area_cover': 'area_cover', 'FLOOR_AREA': 'FLOOR_AREA', 'vol': 'vol', 'calc_komot': 'calc_komot', 'id': 'id', 'name': 'name', 'period': 'period', 'descriptio': 'descriptio', 'link to im': 'link to im', 'oid_ktovet': 'oid_ktovet', 'id_ktovet': 'id_ktovet', 'k_rechov': 'k_rechov', 't_rechov': 't_rechov', 'ms_bayit': 'ms_bayit', 'knisa': 'knisa', 't_bayit_ve': 't_bayit_ve', 't_ktovet_m': 't_ktovet_m', 'x': 'x', 'y': 'y', 'ms_gush': 'ms_gush', 'ms_chelka': 'ms_chelka', 'k_status_h': 'k_status_h', 'lon': 'lon', 'lat': 'lat', 'בתי כ�': 'בתי כ�', 'בתי �': 'בתי �', 'בתי �_1': 'בתי �_1', 'בתי �_2': 'בתי �_2', 'בתי �_3': 'בתי �_3', 'בתי �_4': 'בתי �_4', 'בתי �_5': 'בתי �_5', 'בתי �_6': 'בתי �_6', 'בתי �_7': 'בתי �_7', 'בתי �_8': 'בתי �_8', 'בתי �_9': 'בתי �_9', 'בתי �10': 'בתי �10', 'בתי �11': 'בתי �11', 'בתי �12': 'בתי �12', 'בתי �13': 'בתי �13', 'בתי �14': 'בתי �14', 'בתי �15': 'בתי �15', 'בתי �16': 'בתי �16', 'בתי �17': 'בתי �17', 'בתי �18': 'בתי �18', 'בתי �19': 'בתי �19', 'בתי �20': 'בתי �20', 'בתי �21': 'בתי �21', 'בתי �22': 'בתי �22', 'בתי �23': 'בתי �23', 'בתי �24': 'בתי �24', 'שכונו': 'שכונו', 'שכונ_1': 'שכונ_1', 'oid_mosad': 'oid_mosad', 'k_mosad': 'k_mosad', 'shem_mosad': 'shem_mosad', 'shem_recho': 'shem_recho', 'ms_bait': 'ms_bait', 'k_memshalt': 'k_memshalt', 't_peilut': 't_peilut', 't_shlav_ch': 't_shlav_ch', 'me_kita': 'me_kita', 'ad_kita': 'ad_kita', 't_zerem': 't_zerem', 't_migzar': 't_migzar', 't_sug_chin': 't_sug_chin', 't_baalut': 't_baalut', 't_mikum': 't_mikum', 't_zerem_ti': 't_zerem_ti', 'k_chataz': 'k_chataz', 'k_mosad_ve': 'k_mosad_ve', 'tik_sheatc': 'tik_sheatc', 'k_shapach': 'k_shapach', 'shem_tahan': 'shem_tahan', 'shem_rec_1': 'shem_rec_1', 'ms_bait_s': 'ms_bait_s', 'mishpacha_': 'mishpacha_', 'prati_gane': 'prati_gane', 'telefon_ga': 'telefon_ga', 'telefon_ki': 'telefon_ki', 'mishpach_1': 'mishpach_1', 'prati_mena': 'prati_mena', 'telefon_me': 'telefon_me', 'telefon_mo': 'telefon_mo', 'shem_rakez': 'shem_rakez', 'zaharon': 'zaharon', 'makbila': 'makbila', 'id_2': 'id_2', 'area': 'area', 'TYPE': 'TYPE', 'TYPETEXT': 'TYPETEXT', 'BookationI': 'BookationI', 'StreetName': 'StreetName', 'BuildingNu': 'BuildingNu', 'BookName': 'BookName', 'Quote': 'Quote', 'AuthorName': 'AuthorName', 'oid_bookat': 'oid_bookat', 'Lang': 'Lang', 'שם': 'שם', 'תאור': 'תאור', 'oid_atar': 'oid_atar', 'shem': 'shem', 'mikzoa': 'mikzoa', 'years': 'years', 'hearot': 'hearot', 't_maslul': 't_maslul', 'ms_maslul': 'ms_maslul', 'PageNum': 'PageNum', 'oid_pesel': 'oid_pesel', 'ms_pesel': 'ms_pesel', 'shem_pesel': 'shem_pesel', 'shem_oman': 'shem_oman', 'shana': 'shana', 'technika': 'technika', 'mikum_pese': 'mikum_pese', 'shem_tmona': 'shem_tmona', 'layer': 'layer', 'path': 'path', });
lyr__26.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'LENGTH_MIN': 'LENGTH_MIN', 'AUTHOR': 'AUTHOR', 'CREDITS': 'CREDITS', 'LINK': 'LINK', });
lyr___27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MainFeatureType': 'סיווג ראשי', 'MainFeatureDescription': 'פירוט', 'SP_Name': 'שם המין', 'ReporterName': 'שם הסוקר', 'Notes': 'הערות', 'PlaceName': 'שם ישוב', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'GlobalID': 'GlobalID', });
lyr___28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HazardType': 'סיווג ראשי', 'HazardDescription': 'פירוט', 'ReporterName': 'שם הסוקר', 'Notes': 'הערות', 'PlaceName': 'שם ישוב', 'SpName': 'שם המין', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'GlobalID': 'GlobalID', });
lyr___29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SP_Name': 'שם מין', 'NumOfIndividuals': 'מספר פרטים', 'Obs_Type': 'סוג תצפית', 'Notes': 'הערות', 'ReporterName': 'שם סוקר', 'DurationOfObs_Minutes': 'משך תצפית - בדקות', 'FeatureType': 'סוג ממצא', 'NestingIndication': 'אינדיקציית קינון', 'TaxonomicGroup': 'קבוצה טקסונומית', 'ObsTime': 'זמן תצפית', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'GlobalID': 'GlobalID', });
lyr____30.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PublicType': 'סיווג ראשי', 'PublicDescription': 'פירוט', 'ReporterName': 'שם הסוקר', 'Notes': 'הערות', 'PlaceName': 'שם ישוב', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'GlobalID': 'GlobalID', });
lyr__0.set('fieldImages', {'fid': '', 'oid_mivne': '', 'id_binyan': '', 't_sug_mivn': '', 'ms_komot': '', 'shem_mivne': '', 't_amudim': '', 'date_impor': '', 'id_binyan_': '', 'UniqueId': '', 'gova_mpi_2': '', 'gova_simpl': '', 'min_height': '', 'max_height': '', 'year': '', 'area_cover': '', 'FLOOR_AREA': '', 'vol': '', 'calc_komot': '', });
lyr__1.set('fieldImages', {'oid_mivne': '', 'id_binyan': '', 't_sug_mivn': '', 'ms_komot': '', 'shem_mivne': '', 't_amudim': '', 'date_impor': '', 'id_binyan_': '', 'UniqueId': '', 'gova_mpi_2': '', 'gova_simpl': '', 'min_height': '', 'max_height': '', 'year': '', 'area_cover': '', 'FLOOR_AREA': '', 'vol': '', 'calc_komot': '', });
lyr__2.set('fieldImages', {'fid': '', 'oid_mivne': '', 'id_binyan': '', 't_sug_mivn': '', 'ms_komot': '', 'shem_mivne': '', 't_amudim': '', 'date_impor': '', 'id_binyan_': '', 'UniqueId': '', 'gova_mpi_2': '', 'gova_simpl': '', 'min_height': '', 'max_height': '', 'year': '', 'area_cover': '', 'FLOOR_AREA': '', 'vol': '', 'calc_komot': '', 'layer': '', 'path': '', });
lyr_H_3.set('fieldImages', {'oid_mivne': '', 'id_binyan': '', 't_sug_mivn': '', 'ms_komot': '', 'shem_mivne': '', 't_amudim': '', 'date_impor': '', 'id_binyan_': '', 'UniqueId': '', 'gova_mpi_2': '', 'gova_simpl': '', 'min_height': '', 'max_height': '', 'year': '', 'area_cover': '', 'FLOOR_AREA': '', 'vol': '', 'calc_komot': '', });
lyr_H_4.set('fieldImages', {'id': '', });
lyr__5.set('fieldImages', {'Shape_Area': 'TextEdit', 'Shape_Length': 'TextEdit', 'oid': 'TextEdit', 'date_import': 'TextEdit', });
lyr_HUL_6.set('fieldImages', {'OBJECTID_1': '', 'SiteID': '', 'SiteName': '', 'PlaceName': '', 'GlobalID': '', 'type': '', 'neighborho': '', 'Main': '', 'Enviro': '', 'Eco': '', 'Social': '', 'Total': '', 'Shape_Leng': '', 'Shape_Area': '', 'id': '', 'neighborH': '', 'site_name': '', 'oid_shchun': '', 'ms_shchuna': '', 'date_impor': '', 'shem_shchu': '', 'UniqueId': '', 'OID_SH': '', 'year': '', 'oid_rechov': '', 'k_rechov': '', 't_rechov': '', 'shem_angli': '', 'ms_lamas': '', 't_sug': '', 'k_kivun': '', 'OBJECTID_2': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'OBJECTID': '', 'Number': '', 'Name': '', 'Address': '', 'Spatial': '', 'layer': '', 'path': '', });
lyr__7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'SiteID': 'Range', 'SiteName': 'TextEdit', 'PlaceName': 'TextEdit', 'GlobalID': 'TextEdit', 'type': 'TextEdit', 'neighborhood': 'TextEdit', 'Main': 'TextEdit', 'Enviro': 'TextEdit', 'Eco': 'TextEdit', 'Social': 'TextEdit', 'Total': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__8.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'SiteID': 'Range', 'SiteName': 'TextEdit', 'PlaceName': 'TextEdit', 'GlobalID': 'TextEdit', 'type': 'TextEdit', 'neighborhood': 'TextEdit', 'Main': 'TextEdit', 'Enviro': 'TextEdit', 'Eco': 'TextEdit', 'Social': 'TextEdit', 'Total': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__9.set('fieldImages', {'id': '', 'neighborH': '', 'site_name': '', });
lyr__1944_10.set('fieldImages', {'id': '', });
lyr_10_11.set('fieldImages', {'oid_mivne': 'TextEdit', 'id_binyan': 'TextEdit', 't_sug_mivn': 'TextEdit', 'ms_komot': 'TextEdit', 'shem_mivne': 'TextEdit', 't_amudim': 'TextEdit', 'date_impor': 'TextEdit', 'id_binyan_': 'TextEdit', 'UniqueId': '', 'gova_mpi_2': 'TextEdit', 'gova_simpl': 'TextEdit', 'min_height': 'TextEdit', 'max_height': 'TextEdit', 'year': 'TextEdit', 'area': 'TextEdit', });
lyr______12.set('fieldImages', {'OBJECTID': 'TextEdit', 'SP_Name': 'TextEdit', 'WanderingRange': 'Range', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__13.set('fieldImages', {'fid': '', 'oid_shetac': '', 'ms_shefa': '', 'shem_gan': '', 'sug_gan': '', 'shem_gan_t': '', 'sw_nagish': '', 'date_impor': '', 'ms_area': '', 'UniqueId': '', 'oid_migras': '', 'ms_gush': '', 'k_status_h': '', 'ms_migrash': '', 'st_mispar_': '', 'st_taba': '', 'st_taba_ka': '', 'k_yeud_kar': '', 't_yeud_kar': '', 'k_yeud_ras': '', 't_yeud_ras': '', 'ms_shetach': '', 'date_imp_1': '', 'ta_5000_de': '', 'area': '', });
lyr__14.set('fieldImages', {'oid_migras': '', 'ms_gush': '', 'k_status_h': '', 'ms_migrash': '', 'st_mispar_': '', 'st_taba': '', 'st_taba_ka': '', 'k_yeud_kar': '', 't_yeud_kar': '', 'k_yeud_ras': '', 't_yeud_ras': '', 'ms_shetach': '', 'date_impor': '', 'ta_5000_de': '', 'yeud_zone': '', 'area_sqm': '', 'rahak_bas1': '', 'rahak_max1': '', 'year_tokef': '', 'yeartokef': '', 'year_haf': '', });
lyr__15.set('fieldImages', {'oid': 'TextEdit', 'shem_mivne': 'TextEdit', 't_hatraa': 'TextEdit', 'st_taba': 'TextEdit', 'sw_history': 'TextEdit', 'ktovot': 'TextEdit', 'hagbalot': 'TextEdit', 'atraa_warn': 'TextEdit', 'tr_hatraot': 'TextEdit', 'date_impor': 'TextEdit', });
lyr_48_16.set('fieldImages', {'oid_mivne': 'TextEdit', 'id_binyan': 'TextEdit', 't_sug_mivn': 'TextEdit', 'ms_komot': 'TextEdit', 'shem_mivne': 'TextEdit', 't_amudim': 'TextEdit', 'date_impor': 'TextEdit', 'id_binyan_': 'TextEdit', 'UniqueId': '', 'gova_mpi_2': 'TextEdit', 'gova_simpl': 'TextEdit', 'min_height': 'TextEdit', 'max_height': 'TextEdit', 'year': 'TextEdit', 'area_cover': 'TextEdit', 'FLOOR_AREA': '', 'vol': 'TextEdit', 'calc_komot': 'TextEdit', });
lyr_1948_17.set('fieldImages', {'oid_mivne': '', 'id_binyan': '', 't_sug_mivn': '', 'ms_komot': '', 'shem_mivne': '', 't_amudim': '', 'date_impor': '', 'id_binyan_': '', 'UniqueId': '', 'gova_mpi_2': '', 'gova_simpl': '', 'min_height': '', 'max_height': '', 'year': '', 'area_cover': '', 'FLOOR_AREA': '', 'vol': '', 'calc_komot': '', 'kav_binyan': '', });
lyr__18.set('fieldImages', {'OBJECTID': '', 'UNIQ_ID': '', 'PARENT': '', 'FCODE': '', 'FTYPE': '', 'FSTATUS': '', 'HYDRO_NET': '', 'STRM_ORDER': '', 'ACC_LEN': '', 'FNAME_CODE': '', 'FNAME': '', 'LATIN_NAME': '', 'ORIG_LEN': '', 'DATA_YEAR': '', 'PRDCT_VER': '', 'SHAPE_Leng': '', });
lyr__19.set('fieldImages', {'OBJECTID_12': 'TextEdit', 'CreationDate': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'OBJECTID': 'TextEdit', 'Type': 'TextEdit', 'Number': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'Spatial': 'TextEdit', 'Enviro': 'TextEdit', 'Eco': 'TextEdit', 'Social': 'TextEdit', 'Total': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr____20.set('fieldImages', {'OBJECTID_12': '', 'CreationDate': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'OBJECTID': '', 'Type': '', 'Number': '', 'Name': '', 'Address': '', 'Spatial': '', 'Enviro': '', 'Eco': '', 'Social': '', 'Total': '', 'Shape_Length': '', });
lyr__21.set('fieldImages', {'oid_rechov': '', 'k_rechov': '', 't_rechov': '', 'shem_angli': '', 'ms_lamas': '', 't_sug': '', 'k_kivun': '', 'UniqueId': '', });
lyr___22.set('fieldImages', {'OBJECTID': '', 'Number': '', 'Remarks': '', 'GlobalID': '', 'Shape_Length': '', });
lyr_1949_23.set('fieldImages', {'oid_rechov': 'TextEdit', 'k_rechov': 'TextEdit', 't_rechov': 'TextEdit', 'shem_angli': 'TextEdit', 'ms_lamas': 'TextEdit', 't_sug': 'TextEdit', 'k_kivun': 'TextEdit', 'UniqueId': 'TextEdit', });
lyr_100_24.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Point_x': '', 'Point_y': '', });
lyr____25.set('fieldImages', {'oid': '', 'shem_mivne': '', 't_hatraa': '', 'st_taba': '', 'sw_history': '', 'ktovot': '', 'hagbalot': '', 'atraa_warn': '', 'tr_hatraot': '', 'date_impor': '', 'oid_mivne': '', 'id_binyan': '', 't_sug_mivn': '', 'ms_komot': '', 't_amudim': '', 'id_binyan_': '', 'UniqueId': '', 'gova_mpi_2': '', 'gova_simpl': '', 'min_height': '', 'max_height': '', 'year': '', 'area_cover': '', 'FLOOR_AREA': '', 'vol': '', 'calc_komot': '', 'id': '', 'name': '', 'period': '', 'descriptio': '', 'link to im': '', 'oid_ktovet': '', 'id_ktovet': '', 'k_rechov': '', 't_rechov': '', 'ms_bayit': '', 'knisa': '', 't_bayit_ve': '', 't_ktovet_m': '', 'x': '', 'y': '', 'ms_gush': '', 'ms_chelka': '', 'k_status_h': '', 'lon': '', 'lat': '', 'בתי כ�': '', 'בתי �': '', 'בתי �_1': '', 'בתי �_2': '', 'בתי �_3': '', 'בתי �_4': '', 'בתי �_5': '', 'בתי �_6': '', 'בתי �_7': '', 'בתי �_8': '', 'בתי �_9': '', 'בתי �10': '', 'בתי �11': '', 'בתי �12': '', 'בתי �13': '', 'בתי �14': '', 'בתי �15': '', 'בתי �16': '', 'בתי �17': '', 'בתי �18': '', 'בתי �19': '', 'בתי �20': '', 'בתי �21': '', 'בתי �22': '', 'בתי �23': '', 'בתי �24': '', 'שכונו': '', 'שכונ_1': '', 'oid_mosad': '', 'k_mosad': '', 'shem_mosad': '', 'shem_recho': '', 'ms_bait': '', 'k_memshalt': '', 't_peilut': '', 't_shlav_ch': '', 'me_kita': '', 'ad_kita': '', 't_zerem': '', 't_migzar': '', 't_sug_chin': '', 't_baalut': '', 't_mikum': '', 't_zerem_ti': '', 'k_chataz': '', 'k_mosad_ve': '', 'tik_sheatc': '', 'k_shapach': '', 'shem_tahan': '', 'shem_rec_1': '', 'ms_bait_s': '', 'mishpacha_': '', 'prati_gane': '', 'telefon_ga': '', 'telefon_ki': '', 'mishpach_1': '', 'prati_mena': '', 'telefon_me': '', 'telefon_mo': '', 'shem_rakez': '', 'zaharon': '', 'makbila': '', 'id_2': '', 'area': '', 'TYPE': '', 'TYPETEXT': '', 'BookationI': '', 'StreetName': '', 'BuildingNu': '', 'BookName': '', 'Quote': '', 'AuthorName': '', 'oid_bookat': '', 'Lang': '', 'שם': '', 'תאור': '', 'oid_atar': '', 'shem': '', 'mikzoa': '', 'years': '', 'hearot': '', 't_maslul': '', 'ms_maslul': '', 'PageNum': '', 'oid_pesel': '', 'ms_pesel': '', 'shem_pesel': '', 'shem_oman': '', 'shana': '', 'technika': '', 'mikum_pese': '', 'shem_tmona': '', 'layer': '', 'path': '', });
lyr__26.set('fieldImages', {'id': '', 'NAME': '', 'LENGTH_MIN': '', 'AUTHOR': '', 'CREDITS': '', 'LINK': '', });
lyr___27.set('fieldImages', {'OBJECTID': '', 'MainFeatureType': 'ValueMap', 'MainFeatureDescription': '', 'SP_Name': '', 'ReporterName': '', 'Notes': '', 'PlaceName': '', 'created_user': '', 'created_date': '', 'last_edited_user': '', 'last_edited_date': '', 'GlobalID': '', });
lyr___28.set('fieldImages', {'OBJECTID': '', 'HazardType': 'ValueMap', 'HazardDescription': '', 'ReporterName': '', 'Notes': '', 'PlaceName': '', 'SpName': '', 'created_user': '', 'created_date': '', 'last_edited_user': '', 'last_edited_date': '', 'GlobalID': '', });
lyr___29.set('fieldImages', {'OBJECTID': '', 'SP_Name': '', 'NumOfIndividuals': '', 'Obs_Type': 'ValueMap', 'Notes': '', 'ReporterName': '', 'DurationOfObs_Minutes': '', 'FeatureType': 'ValueMap', 'NestingIndication': 'ValueMap', 'TaxonomicGroup': 'ValueMap', 'ObsTime': '', 'created_user': '', 'created_date': '', 'last_edited_user': '', 'last_edited_date': '', 'GlobalID': '', });
lyr____30.set('fieldImages', {'OBJECTID': '', 'PublicType': 'ValueMap', 'PublicDescription': '', 'ReporterName': '', 'Notes': '', 'PlaceName': '', 'created_user': '', 'created_date': '', 'last_edited_user': '', 'last_edited_date': '', 'GlobalID': '', });
lyr__0.set('fieldLabels', {});
lyr__1.set('fieldLabels', {});
lyr__2.set('fieldLabels', {});
lyr_H_3.set('fieldLabels', {});
lyr_H_4.set('fieldLabels', {});
lyr__5.set('fieldLabels', {'Shape_Area': 'no label', 'Shape_Length': 'no label', 'oid': 'no label', 'date_import': 'no label', });
lyr_HUL_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'SiteID': 'no label', 'SiteName': 'no label', 'PlaceName': 'no label', 'GlobalID': 'no label', 'type': 'no label', 'neighborho': 'no label', 'Main': 'no label', 'Enviro': 'no label', 'Eco': 'no label', 'Social': 'no label', 'Total': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'id': 'no label', 'neighborH': 'no label', 'site_name': 'no label', 'oid_shchun': 'no label', 'ms_shchuna': 'no label', 'date_impor': 'no label', 'shem_shchu': 'no label', 'UniqueId': 'no label', 'OID_SH': 'no label', 'year': 'no label', 'oid_rechov': 'no label', 'k_rechov': 'no label', 't_rechov': 'no label', 'shem_angli': 'no label', 'ms_lamas': 'no label', 't_sug': 'no label', 'k_kivun': 'no label', 'OBJECTID_2': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'OBJECTID': 'no label', 'Number': 'no label', 'Name': 'no label', 'Address': 'no label', 'Spatial': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__7.set('fieldLabels', {'OBJECTID_1': 'no label', 'SiteID': 'no label', 'SiteName': 'no label', 'PlaceName': 'no label', 'GlobalID': 'no label', 'type': 'no label', 'neighborhood': 'no label', 'Main': 'no label', 'Enviro': 'no label', 'Eco': 'no label', 'Social': 'no label', 'Total': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr__8.set('fieldLabels', {'OBJECTID_1': 'no label', 'SiteID': 'no label', 'SiteName': 'no label', 'PlaceName': 'no label', 'GlobalID': 'no label', 'type': 'no label', 'neighborhood': 'no label', 'Main': 'no label', 'Enviro': 'no label', 'Eco': 'no label', 'Social': 'no label', 'Total': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr__9.set('fieldLabels', {'id': 'no label', 'neighborH': 'no label', 'site_name': 'no label', });
lyr__1944_10.set('fieldLabels', {'id': 'no label', });
lyr_10_11.set('fieldLabels', {'oid_mivne': 'no label', 'id_binyan': 'no label', 't_sug_mivn': 'no label', 'ms_komot': 'no label', 'shem_mivne': 'no label', 't_amudim': 'no label', 'date_impor': 'no label', 'id_binyan_': 'no label', 'UniqueId': 'no label', 'gova_mpi_2': 'no label', 'gova_simpl': 'no label', 'min_height': 'no label', 'max_height': 'no label', 'year': 'no label', 'area': 'no label', });
lyr______12.set('fieldLabels', {'OBJECTID': 'no label', 'SP_Name': 'no label', 'WanderingRange': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr__13.set('fieldLabels', {'fid': 'no label', 'oid_shetac': 'no label', 'ms_shefa': 'no label', 'shem_gan': 'no label', 'sug_gan': 'no label', 'shem_gan_t': 'no label', 'sw_nagish': 'no label', 'date_impor': 'no label', 'ms_area': 'no label', 'UniqueId': 'no label', 'oid_migras': 'no label', 'ms_gush': 'no label', 'k_status_h': 'no label', 'ms_migrash': 'no label', 'st_mispar_': 'no label', 'st_taba': 'no label', 'st_taba_ka': 'no label', 'k_yeud_kar': 'no label', 't_yeud_kar': 'no label', 'k_yeud_ras': 'no label', 't_yeud_ras': 'no label', 'ms_shetach': 'no label', 'date_imp_1': 'no label', 'ta_5000_de': 'no label', 'area': 'no label', });
lyr__14.set('fieldLabels', {'oid_migras': 'no label', 'ms_gush': 'no label', 'k_status_h': 'no label', 'ms_migrash': 'no label', 'st_mispar_': 'no label', 'st_taba': 'no label', 'st_taba_ka': 'no label', 'k_yeud_kar': 'no label', 't_yeud_kar': 'no label', 'k_yeud_ras': 'no label', 't_yeud_ras': 'no label', 'ms_shetach': 'no label', 'date_impor': 'no label', 'ta_5000_de': 'no label', 'yeud_zone': 'no label', 'area_sqm': 'no label', 'rahak_bas1': 'no label', 'rahak_max1': 'no label', 'year_tokef': 'no label', 'yeartokef': 'no label', 'year_haf': 'no label', });
lyr__15.set('fieldLabels', {'oid': 'no label', 'shem_mivne': 'no label', 't_hatraa': 'no label', 'st_taba': 'no label', 'sw_history': 'no label', 'ktovot': 'no label', 'hagbalot': 'no label', 'atraa_warn': 'no label', 'tr_hatraot': 'no label', 'date_impor': 'no label', });
lyr_48_16.set('fieldLabels', {'oid_mivne': 'no label', 'id_binyan': 'no label', 't_sug_mivn': 'no label', 'ms_komot': 'no label', 'shem_mivne': 'no label', 't_amudim': 'no label', 'date_impor': 'no label', 'id_binyan_': 'no label', 'UniqueId': 'no label', 'gova_mpi_2': 'no label', 'gova_simpl': 'no label', 'min_height': 'no label', 'max_height': 'no label', 'year': 'no label', 'area_cover': 'no label', 'FLOOR_AREA': 'no label', 'vol': 'no label', 'calc_komot': 'no label', });
lyr_1948_17.set('fieldLabels', {'oid_mivne': 'no label', 'id_binyan': 'no label', 't_sug_mivn': 'no label', 'ms_komot': 'no label', 'shem_mivne': 'no label', 't_amudim': 'no label', 'date_impor': 'no label', 'id_binyan_': 'no label', 'UniqueId': 'no label', 'gova_mpi_2': 'no label', 'gova_simpl': 'no label', 'min_height': 'no label', 'max_height': 'no label', 'year': 'no label', 'area_cover': 'no label', 'FLOOR_AREA': 'no label', 'vol': 'no label', 'calc_komot': 'no label', 'kav_binyan': 'no label', });
lyr__18.set('fieldLabels', {'OBJECTID': 'no label', 'UNIQ_ID': 'no label', 'PARENT': 'no label', 'FCODE': 'no label', 'FTYPE': 'no label', 'FSTATUS': 'no label', 'HYDRO_NET': 'no label', 'STRM_ORDER': 'no label', 'ACC_LEN': 'no label', 'FNAME_CODE': 'no label', 'FNAME': 'no label', 'LATIN_NAME': 'no label', 'ORIG_LEN': 'no label', 'DATA_YEAR': 'no label', 'PRDCT_VER': 'no label', 'SHAPE_Leng': 'no label', });
lyr__19.set('fieldLabels', {'OBJECTID_12': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'OBJECTID': 'no label', 'Type': 'no label', 'Number': 'no label', 'Name': 'no label', 'Address': 'no label', 'Spatial': 'no label', 'Enviro': 'no label', 'Eco': 'no label', 'Social': 'no label', 'Total': 'no label', 'Shape_Length': 'no label', });
lyr____20.set('fieldLabels', {'OBJECTID_12': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'OBJECTID': 'no label', 'Type': 'no label', 'Number': 'no label', 'Name': 'no label', 'Address': 'no label', 'Spatial': 'no label', 'Enviro': 'no label', 'Eco': 'no label', 'Social': 'no label', 'Total': 'no label', 'Shape_Length': 'no label', });
lyr__21.set('fieldLabels', {'oid_rechov': 'no label', 'k_rechov': 'no label', 't_rechov': 'no label', 'shem_angli': 'no label', 'ms_lamas': 'no label', 't_sug': 'no label', 'k_kivun': 'no label', 'UniqueId': 'no label', });
lyr___22.set('fieldLabels', {'OBJECTID': 'no label', 'Number': 'no label', 'Remarks': 'no label', 'GlobalID': 'no label', 'Shape_Length': 'no label', });
lyr_1949_23.set('fieldLabels', {'oid_rechov': 'no label', 'k_rechov': 'no label', 't_rechov': 'no label', 'shem_angli': 'no label', 'ms_lamas': 'no label', 't_sug': 'no label', 'k_kivun': 'no label', 'UniqueId': 'no label', });
lyr_100_24.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Point_x': 'no label', 'Point_y': 'no label', });
lyr____25.set('fieldLabels', {'oid': 'no label', 'shem_mivne': 'no label', 't_hatraa': 'no label', 'st_taba': 'no label', 'sw_history': 'no label', 'ktovot': 'no label', 'hagbalot': 'no label', 'atraa_warn': 'no label', 'tr_hatraot': 'no label', 'date_impor': 'no label', 'oid_mivne': 'no label', 'id_binyan': 'no label', 't_sug_mivn': 'no label', 'ms_komot': 'no label', 't_amudim': 'no label', 'id_binyan_': 'no label', 'UniqueId': 'no label', 'gova_mpi_2': 'no label', 'gova_simpl': 'no label', 'min_height': 'no label', 'max_height': 'no label', 'year': 'no label', 'area_cover': 'no label', 'FLOOR_AREA': 'no label', 'vol': 'no label', 'calc_komot': 'no label', 'id': 'no label', 'name': 'no label', 'period': 'no label', 'descriptio': 'no label', 'link to im': 'no label', 'oid_ktovet': 'no label', 'id_ktovet': 'no label', 'k_rechov': 'no label', 't_rechov': 'no label', 'ms_bayit': 'no label', 'knisa': 'no label', 't_bayit_ve': 'no label', 't_ktovet_m': 'no label', 'x': 'no label', 'y': 'no label', 'ms_gush': 'no label', 'ms_chelka': 'no label', 'k_status_h': 'no label', 'lon': 'no label', 'lat': 'no label', 'בתי כ�': 'no label', 'בתי �': 'no label', 'בתי �_1': 'no label', 'בתי �_2': 'no label', 'בתי �_3': 'no label', 'בתי �_4': 'no label', 'בתי �_5': 'no label', 'בתי �_6': 'no label', 'בתי �_7': 'no label', 'בתי �_8': 'no label', 'בתי �_9': 'no label', 'בתי �10': 'no label', 'בתי �11': 'no label', 'בתי �12': 'no label', 'בתי �13': 'no label', 'בתי �14': 'no label', 'בתי �15': 'no label', 'בתי �16': 'no label', 'בתי �17': 'no label', 'בתי �18': 'no label', 'בתי �19': 'no label', 'בתי �20': 'no label', 'בתי �21': 'no label', 'בתי �22': 'no label', 'בתי �23': 'no label', 'בתי �24': 'no label', 'שכונו': 'no label', 'שכונ_1': 'no label', 'oid_mosad': 'no label', 'k_mosad': 'no label', 'shem_mosad': 'no label', 'shem_recho': 'no label', 'ms_bait': 'no label', 'k_memshalt': 'no label', 't_peilut': 'no label', 't_shlav_ch': 'no label', 'me_kita': 'no label', 'ad_kita': 'no label', 't_zerem': 'no label', 't_migzar': 'no label', 't_sug_chin': 'no label', 't_baalut': 'no label', 't_mikum': 'no label', 't_zerem_ti': 'no label', 'k_chataz': 'no label', 'k_mosad_ve': 'no label', 'tik_sheatc': 'no label', 'k_shapach': 'no label', 'shem_tahan': 'no label', 'shem_rec_1': 'no label', 'ms_bait_s': 'no label', 'mishpacha_': 'no label', 'prati_gane': 'no label', 'telefon_ga': 'no label', 'telefon_ki': 'no label', 'mishpach_1': 'no label', 'prati_mena': 'no label', 'telefon_me': 'no label', 'telefon_mo': 'no label', 'shem_rakez': 'no label', 'zaharon': 'no label', 'makbila': 'no label', 'id_2': 'no label', 'area': 'no label', 'TYPE': 'no label', 'TYPETEXT': 'no label', 'BookationI': 'no label', 'StreetName': 'no label', 'BuildingNu': 'no label', 'BookName': 'no label', 'Quote': 'no label', 'AuthorName': 'no label', 'oid_bookat': 'no label', 'Lang': 'no label', 'שם': 'no label', 'תאור': 'no label', 'oid_atar': 'no label', 'shem': 'no label', 'mikzoa': 'no label', 'years': 'no label', 'hearot': 'no label', 't_maslul': 'no label', 'ms_maslul': 'no label', 'PageNum': 'no label', 'oid_pesel': 'no label', 'ms_pesel': 'no label', 'shem_pesel': 'no label', 'shem_oman': 'no label', 'shana': 'no label', 'technika': 'no label', 'mikum_pese': 'no label', 'shem_tmona': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__26.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'LENGTH_MIN': 'no label', 'AUTHOR': 'no label', 'CREDITS': 'no label', 'LINK': 'no label', });
lyr___27.set('fieldLabels', {'OBJECTID': 'no label', 'MainFeatureType': 'no label', 'MainFeatureDescription': 'no label', 'SP_Name': 'no label', 'ReporterName': 'no label', 'Notes': 'no label', 'PlaceName': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', 'GlobalID': 'no label', });
lyr___28.set('fieldLabels', {'OBJECTID': 'no label', 'HazardType': 'no label', 'HazardDescription': 'no label', 'ReporterName': 'no label', 'Notes': 'no label', 'PlaceName': 'no label', 'SpName': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', 'GlobalID': 'no label', });
lyr___29.set('fieldLabels', {'OBJECTID': 'no label', 'SP_Name': 'no label', 'NumOfIndividuals': 'no label', 'Obs_Type': 'no label', 'Notes': 'no label', 'ReporterName': 'no label', 'DurationOfObs_Minutes': 'no label', 'FeatureType': 'no label', 'NestingIndication': 'no label', 'TaxonomicGroup': 'no label', 'ObsTime': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', 'GlobalID': 'no label', });
lyr____30.set('fieldLabels', {'OBJECTID': 'no label', 'PublicType': 'no label', 'PublicDescription': 'no label', 'ReporterName': 'no label', 'Notes': 'no label', 'PlaceName': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', 'GlobalID': 'no label', });
lyr____30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});