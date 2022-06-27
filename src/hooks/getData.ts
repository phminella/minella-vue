import { useStore } from "vuex";
import { computed } from "vue";
import i18n from '../plugins/i18n';

export default function useGetData(fetchUrl: any, actionName: any) {
    const store = useStore();
    // fetch data from server
    fetch(fetchUrl)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            const dataArray = [];
            const temp = data[i18n.global.locale];
            for (const id in temp) {
                // Change array structure to adapt to your data
                dataArray.push({
                    id: id,
                    company: temp[id].company,
                    location: temp[id].location,
                    year: temp[id].year,
                    position: temp[id].position,
                    details: temp[id].details,
                    bgImg: temp[id].bgImg,
                    flagImg: temp[id].flagImg
                });
            }
            store.dispatch(actionName, dataArray);
        })
        .catch((error) => {
            console.log("error:" + error);
        });
    // store the vuex state into a computed variable
    const data = computed(function () { return store.state[actionName] });
    return data;
}