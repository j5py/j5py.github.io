

// This script and its "usable" object are not included on the client side,
// this file is just a way to store some useful code for later.

const usable = {
    environment: {
        isMobileDevice: () => {
            let result;
            (function(a){ // Source : http://detectmobilebrowsers.com/
                if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) result = true
            })(navigator.userAgent||navigator.vendor||window.opera);
            return result
        },
        ios: {
            isWebview: () => {
                const userAgent = window.navigator.userAgent.toLowerCase()
                    , safari = /safari/.test(userAgent)
                    , ios = /iphone|ipod|ipad/.test(userAgent)
                    ;
                if(ios) {
                    if (safari) return false;
                    else if (!safari) return true
                } else return false
            }
        }
    },
    compatibility: {
        fix: {
            internetExplorer: {
                arrayIncludes: (value, array) => {
                    value = String(value);
                    var i = 0, hasValue = false;
                    while (i < array.length) {
                        if (array[i] === value) {
                            hasValue = true;
                            break
                        } i++
                    } return hasValue
                },
                getQueryString: (parameter) => {
                    var key = parameter + '='
                      , start = document.location.search.indexOf(key) + key.length
                      , cut = document.location.search.substring(start)
                      ;
                    return cut.substring(0, cut.indexOf('&')).replace(/\+/, ' ')
                }
            }
        }
    },
    location: {
        getMainDomain: () => {
            return window.location.hostname.match(/\w*\.\w*$/)[0]
        },
        getQueryString: (parameter) => {
            return new URLSearchParams(document.location.search).get(parameter)
        }
    },
    dom: {
        move: (child, position, parent) => {
            let temporary = document.createElement('div');
            if (position === 'afterbegin') {
                parent.prepend(temporary);
                temporary.before(child)
            } else if (position === 'beforeend') {
                parent.append(temporary);
                temporary.after(child)
            }
            temporary.remove()
        },
        getValueOf: (property, node) => {
            let value = window.getComputedStyle(node)
                .getPropertyValue(property)
                .replace('px', '')
                ;
            return isNaN(value) ? value : Number(value)
        },
        updateStyleAttribute: (node, removeStringRegex, addStringCondition, stringToAdd) => {
            let css = (node.getAttribute('style') || '').replace(removeStringRegex, '').trim();
            if (addStringCondition) node.setAttribute('style', (css.length ? css + ' ' : css) + stringToAdd);
            else node.setAttribute('style', css)
        },
        tabTrap: (fourNodes, mainNode) => {
            document.addEventListener('keydown', function(e) {
                const isTabPressed = e.key === 'Tab' || e.keyCode === 9;
                if (!isTabPressed) return;
                e.preventDefault();
                if (e.shiftKey) {
                    if (document.activeElement === fourNodes[0]) fourNodes[3].focus();
                    else if (document.activeElement === fourNodes[1]) fourNodes[0].focus();
                    else if (document.activeElement === fourNodes[2]) fourNodes[1].focus();
                    else if (document.activeElement === fourNodes[3]) fourNodes[2].focus()
                }
                else if (document.activeElement === fourNodes[0]) fourNodes[1].focus();
                else if (document.activeElement === fourNodes[1]) fourNodes[2].focus();
                else if (document.activeElement === fourNodes[2]) fourNodes[3].focus();
                else if (document.activeElement === fourNodes[3]) fourNodes[0].focus()
            });
            mainNode.focus()
        },
        copyAllLinks: () => {
            copy(Array.from(document.querySelectorAll('a')).map(a => a.href))
        }
    },
    user: {
        scrollPercentage: {
            value: 0,
            track: () => {
                window.onscroll = (function() {
                    const yOffset = (
                                window.pageYOffset === 0 ? 0 : window.pageYOffset + window.innerHeight
                            )
                        , bodyHeigth = document.querySelector('body').scrollHeight
                        ;
                    usable.user.scrollPercentage.value = Math.round(yOffset * 100 / bodyHeigth)
                }())
            }
        }
    },
    script: {
        add: (arrayOfScripts) => {
            for (let i = 0; i < arrayOfScripts.length; i++) {
                let node = document.createElement('script');
                node.setAttribute('src', arrayOfScripts[i]);
                document.querySelector('body').appendChild(node)
            }
        },
        update: (existingFunction, additionalFunction) => {
            var originalFunction = existingFunction;
            existingFunction = function() {
                originalFunction();
                additionalFunction()
            }
        },
        isExecutedInIframe: () => {
           return window.self !== window.top
        }
    },
    time: {
        getActualTimestamp: () => {
            return (new Date()).getTime()
        },
        getDaysInMilliseconds: (days) => {
            return 1000 * 60 * 60 * 24 * days
        },
        getUtcFromTimestamp: (timestamp) => {
            return (new Date(timestamp)).toUTCString()
        },
        getUtcInNumberOfDays: (days) => {
            return usable.time.getUtcFromTimestamp(
                usable.time.getActualTimestamp() + usable.time.getDaysInMilliseconds(days)
            )
        }
    },
    cookie: {
        set: (name, value, path, domain, expires) => {
            document.cookie = `${name}=${value};path=${path};domain=${domain};expires=${expires}`
        },
        get: (name) => {
            let cut, stringStart = document.cookie.indexOf(name);
            if (stringStart > -1) {
                cut = document.cookie.substring(stringStart + name.length + 1);
                const stringEnd = cut.indexOf(';');
                if (stringEnd > -1) cut = cut.substring(0, stringEnd)
            } return cut
        }
    }
}
