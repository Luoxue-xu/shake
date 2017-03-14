import Shake from './shake';

class ShakeGame {

    constructor(options) {
        this.shakeTop = document.querySelector('.shake-top');
        this.shakeBottom = document.querySelector('.shake-bottom');
        this.shakeCard = document.querySelector('.shake-card');
        this.shakeSmallPhoto = document.querySelector('.shake-card-photo');
        this.shake = new Shake({
            threshold: 15
        });
        this.shake.start();
        this.upDate();
        this.events();
    }

    // 请求数据
    upDate() {
        this.data = [
            'http://imglf2.nosdn.127.net/img/TFJITWpXcVhEcGJHMjFNeXBqdHAvMndCdWVIUTlBOUdmM3J4QWV6cjRwTTBJNXpkZDBvZEZnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/TFJITWpXcVhEcGF3VnFCcTdMUTBaRldNMmxYVy9lWFpvYkdMY25SdFBFZzUrdmtDYkxkU0R3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf1.nosdn.127.net/img/MFEvTGxaTG55QVN5QWExS2xoc3FzdjllSDg0U2tEYjJ5SWpqaWhJZGdjdU9ZTkJ6ZStKa01RPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf1.nosdn.127.net/img/MGJ1SGdwR24yUmhScUNrUXcrSVdsR1VEd0orZ0RhTHlpRjJEZWJVY2J6ZFRCZk95SzQ5YXdRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/Q0hrMjhBZmsycEIyTWdmL3pBVk45ZEpZbjdRYzVKcEFDL0s4T3pmeDhWQ3FVU1Nnam9FN0xRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/TFJITWpXcVhEcGJHMjFNeXBqdHAvMndCdWVIUTlBOUdmM3J4QWV6cjRwTTBJNXpkZDBvZEZnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/MFEvTGxaTG55QVJVUDVSRGNNWjRRb2hmSkhnR3NxUkViOVBXQ2dYb1RHUkNxaFduYVVnOVBnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4OHo0VEliTnEyQmw4aGVUMEp0d2hIaC9RY2x4aDRiWHFnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/Q0hrMjhBZmsycERNMzRySE5kOGxqaTNUTVVtbjMxbUs1S1h0TFFRbjdiZUZCQkJiSFplRC9RPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/Q0hrMjhBZmsycEJxK1ViYWZXbXlrUENTL1lyK2ZGUVJuWFltSnJUR3kvaDFqb3N3WnZuN3RBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf1.nosdn.127.net/img/RzlJRTVZYmRRY0tCR0R4bGJMUnRaQnkwOWxzYW9WdVB6amlzVFczekppSWhyY2RxUHhTNWZ3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf1.nosdn.127.net/img/ekxTQkZkZDRSWTI3OTJZTVdGcXo1V3JLZ1N1dko4R0puMWdIYzhPNlQyK3gwbHQ0Yk54TVdRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/MXZSVG93dnlYY2x2QmxYVjk2Wi9XYmRMR0lWNGhnV1hPak84N3hFbGN0ZmFFenBiM0IvTWRRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgWmFja3h1wrfjhKPjhJLjhKTjhKUgLyBwdXJlc3Q0dS5sb2Z0ZXIuY29t&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0',
            'http://imglf2.nosdn.127.net/img/RzlJRTVZYmRRY0tCR0R4bGJMUnRaSjZ5VWZQYlZ2SHFQVG5vVCs1MFRGSUd6dks1VHVpUlpBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0lPZTRkQUtkcUgvSktLTDgvUFJOV3IvdSs4dStWSVRjY1EzNWNhL2VEUEJBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0lPZTRkQUtkcUgvSktLTDgvUFJOV3IvdSs4dStWSVRjY1EzNWNhL2VEUEJBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/TFJITWpXcVhEcGFZdDBwVWxiKzRXbkVJZVZpTmVQY2lJeDlWT2xBL2hWcE5xR1FDK1ZkU3dnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/Q0hrMjhBZmsycEFwckdXNlp1M0Z3SEtTMWlyRlpocUEwV0hkNHFFY0dFazFwQ21sS04vT0RnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/dHhRYXNFRmlKWmlwenJ2QWZ6eURBMUpyRG02c1JiZEtlVUhGQnpEOFA2alg1N0FtcFlpVWZBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf1.nosdn.127.net/img/TFJITWpXcVhEcFpzeDVTVisxSWVtcVFnRkVRRXdlK1hJbEt5eWdzL2pIRGdtVWpQVU1HYUl3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/cm45V2x4Z0FjRzgzK0lVckF0MmE2N1dJY3RnVk11OTVGVVNTaVMrcVZKZVhzVnNMZXM2azBBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgVmlWaSDigJTigJQg5bCP5oCn5oSf6ICM5beyIC8gbW12aXZpLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0',
            'http://imglf2.nosdn.127.net/img/M3krRS9lT1g1V0cvMDRRZ0llVmNHZWgvYmIvMHE3Z1NxQzBuREkyY283VjJpRmhITnNHVzJBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/Q0hrMjhBZmsycEIyTWdmL3pBVk45ZEpZbjdRYzVKcEFDL0s4T3pmeDhWQ3FVU1Nnam9FN0xRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/Q0hrMjhBZmsycEIyTWdmL3pBVk45ZEpZbjdRYzVKcEFDL0s4T3pmeDhWQ3FVU1Nnam9FN0xRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/dHhRYXNFRmlKWmkyOHdzOWF2SDVZOVpKekhkalJPWnoyaUZES3JYRytHamFaREJUeWZRa29nPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf1.nosdn.127.net/img/Q0hrMjhBZmsycENUNmJIVk1CTEN6VWtINHBRcnZNZmsyMEhtcDlxUllMVzUrZXIzdzdnR2ZBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4OHo0VEliTnEyQmw4aGVUMEp0d2hIaC9RY2x4aDRiWHFnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/TFJITWpXcVhEcGJHMjFNeXBqdHAvMndCdWVIUTlBOUdmM3J4QWV6cjRwTTBJNXpkZDBvZEZnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/TFJITWpXcVhEcGJHMjFNeXBqdHAvMndCdWVIUTlBOUdmM3J4QWV6cjRwTTBJNXpkZDBvZEZnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/OFVZOUdtdHI4dlRhVkxaQkNrcjM3a2lSdHo0dWo5cmxxNzAweWszaW9lU1ZLWXRuZ2xrdUhnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf1.nosdn.127.net/img/Y3BTUWp5MVJCODIxWXlFanEzZjUvek1nbUZrR1JVQXNnY1JIRW5FWEliN2ZmVnZpR3p6NWxnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgVGltZWxpbmUgLyBiZW5ndGNoaS5sb2Z0ZXIuY29t&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0',
            'http://imglf2.nosdn.127.net/img/RzJPU1E4RWk4SHNVRjBWQmtvNTJqbTd6Y3gwSW9oQU1nM0JYU01LTlBxdjg0cmM1cVJKcEV3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4NzAxclhBRGVhZ0FabFNQUXN0WDEwa3drSkpXNDkwckdRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4NDFiR1JaQzdXOUdhaUREWm9pYUdmdUxSNUpvbzFVL1RRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/QWRkWXlSbXAzcEV0TlFrcjlZaFlQZ0tkWEY3QktIaEN1ZGpybjN5R2hzOW5NWnRjLzRHLzJRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/bTAwYlpsWEFuRkc3ZkVMVGVTTFliMU15ZUxUMnV0dGxKWjgrZURESkFpNVhNemZ2UTZjVXl3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkg5peg5ZCNIC8gd203NzcubG9mdGVyLmNvbQ==&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0',
            'http://imglf1.nosdn.127.net/img/TFJITWpXcVhEcFpzeDVTVisxSWVtcVFnRkVRRXdlK1hJbEt5eWdzL2pIRGdtVWpQVU1HYUl3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/TFJITWpXcVhEcGJHMjFNeXBqdHAvMndCdWVIUTlBOUdmM3J4QWV6cjRwTTBJNXpkZDBvZEZnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/TFJITWpXcVhEcGJHMjFNeXBqdHAvMndCdWVIUTlBOUdmM3J4QWV6cjRwTTBJNXpkZDBvZEZnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf1.nosdn.127.net/img/MFEvTGxaTG55QVN5QWExS2xoc3FzdjllSDg0U2tEYjJ5SWpqaWhJZGdjdU9ZTkJ6ZStKa01RPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/bTAwYlpsWEFuRkc3ZkVMVGVTTFliMU15ZUxUMnV0dGxKWjgrZURESkFpNVhNemZ2UTZjVXl3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkg5peg5ZCNIC8gd203NzcubG9mdGVyLmNvbQ==&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0',
            'http://imglf1.nosdn.127.net/img/ZUxBTUFIdTZxSFZmZ0g2ZWF6MkRIdUtKZDZoR2ZjZXZoaEsyR3hDSlNTd25FdGVHTWtiNlNBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/TFJITWpXcVhEcFpZc2FLdXdxZkhKbVBicUtJdlpZTlhiVWUwOUhEYmE5SUhsTEEyejFISHVnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/YWpyRUE1NTNOSDM2SlhPUVdZbmVvWkMwbDNWc3RnUVRYRlNid1BmNnhmMGtudU5vdFR2TnVnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4OHo0VEliTnEyQmw4aGVUMEp0d2hIaC9RY2x4aDRiWHFnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/TFJITWpXcVhEcGJHMjFNeXBqdHAvMndCdWVIUTlBOUdmM3J4QWV6cjRwTTBJNXpkZDBvZEZnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/Q0hrMjhBZmsycEF2LzRWSkxKejdkTFRnTWc2QWJsYmp3NXA3R0Z6bDhBRVFLUlpDN0JFZmRBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4NzAxclhBRGVhZ0FabFNQUXN0WDEwa3drSkpXNDkwckdRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.ph.126.net/A_-JKviByAs7ImqdqX6V3Q==/6632591688814748406.jpg',
            'http://imglf.nosdn.127.net/img/b2JRWHNHTkxxRmR3S1RyR0trY0g3V3YwTW9DQjlYb2ExU3lHN3NMdStuM0pIaHQzeFZzYTNRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/WEJTRnhkaWZlcXFKV2NIYVJoT09qSjlUdkpQUUttQWFnM01kRGdDTFNjRjEvdzBPclNTM2ZBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4NzAxclhBRGVhZ0FabFNQUXN0WDEwa3drSkpXNDkwckdRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/Q0hrMjhBZmsycEIyTWdmL3pBVk45VjREZzJoSEVac09rYU9HMlpnTlZ3a0NFZjJVMXFQR1hRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/cDhPUkh6NGxqYXNJSlNoNUppSE96WjRKWUxpdFB4VDltc3R3bXVvRXNCb1JkTzBHSXExT0dnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkg5Y-k5b636ISPIC8gZ29vZHphbmcubG9mdGVyLmNvbQ==&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4NzAxclhBRGVhZ0FabFNQUXN0WDEwa3drSkpXNDkwckdRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/S0ZCZEZGVkhqWFBtSmlqWk9YdmVwMkgwWVF3MDExbHA3aUxsaUNJQnBwOVQxYWhRVkw1bkZ3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/TFJITWpXcVhEcGF3VnFCcTdMUTBaRldNMmxYVy9lWFpvYkdMY25SdFBFZzUrdmtDYkxkU0R3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/emhOY2V3OG5mN1VxYVY4aEN2V0dLd1RiWHNQeFJTM0g2cVVmNno5RElmcHhFL2lZa1d6a1d3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/Q0hrMjhBZmsycEFwckdXNlp1M0Z3S3lwTTI5OVUyVEVaRGNtQ0FUc0hmOForc2ltYU9IZTNRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf1.nosdn.127.net/img/MFEvTGxaTG55QVN5QWExS2xoc3FzdjllSDg0U2tEYjJ5SWpqaWhJZGdjdU9ZTkJ6ZStKa01RPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/YWpyRUE1NTNOSDJVL2p5RFhqZjVrT3NTckxpblhQRzBlQWxZWTl5UWEvdmJpb1RWVFlkRjl3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4OHo0VEliTnEyQmw4aGVUMEp0d2hIaC9RY2x4aDRiWHFnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/TFJITWpXcVhEcGJHMjFNeXBqdHAvMndCdWVIUTlBOUdmM3J4QWV6cjRwTTBJNXpkZDBvZEZnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/Q0hrMjhBZmsycEIyTWdmL3pBVk45ZEpZbjdRYzVKcEFDL0s4T3pmeDhWQ3FVU1Nnam9FN0xRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4NzAxclhBRGVhZ0FabFNQUXN0WDEwa3drSkpXNDkwckdRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf1.nosdn.127.net/img/bmc3cUFxRjJqbWFxdUd0WlhKM3hEa2ZyVlhrWERzd1lhMTErbjZUeFU5WXptZkMzenk2dStRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf.nosdn.127.net/img/NGFJeFF4OWozUkdudEVBYXV1YXpKUHZTWmsrZHNNQWxEdk9aVmtxZnlZZENlMDBEbTA2cWNnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/N1MrNkE4bkhxai9vMmMzY3MxZkI0Mi8wNDRLa3Q2TFdFV1dzdWZoRXJkbkNNNjNpUWIxOU1nPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf2.nosdn.127.net/img/S0ZCZEZGVkhqWFBtSmlqWk9YdmVwMkgwWVF3MDExbHA3aUxsaUNJQnBwOVQxYWhRVkw1bkZ3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4NzAxclhBRGVhZ0FabFNQUXN0WDEwa3drSkpXNDkwckdRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
            'http://imglf0.nosdn.127.net/img/RzlJRTVZYmRRY0xQUE9NMWx5RXU4OHo0VEliTnEyQmw4aGVUMEp0d2hIaC9RY2x4aDRiWHFnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'
        ];
    }

    // 打开天窗说亮话
    open() {
        let imgUrl = `url(${this.data[Math.floor(Math.random() * this.data.length)]})`;
        this.shakeTop.classList.add('translate');
        this.shakeBottom.classList.add('translate');
        document.body.style.backgroundImage = imgUrl
        this.shakeCard.style.opacity = 1;
        this.shakeSmallPhoto.style.backgroundImage = imgUrl;

        setTimeout(() => {
            this.shakeTop.classList.remove('translate');
            this.shakeBottom.classList.remove('translate');
        }, 2000);
    }

    events() {
        this.shake.on('shake', this.open.bind(this));
    }

}

let shakeGame = new ShakeGame({});
